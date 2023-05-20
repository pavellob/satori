import { Satori } from "@prisma/client";
import { ExecutionContext, Inject, Injectable, Scope } from "graphql-modules";
import { PubSub } from "graphql-subscriptions";
import { Consumer, Kafka, Offsets, Producer } from "kafkajs";

@Injectable({
})
export class KafkaService {
  private producer: Producer;
  private consumer: Consumer;
   constructor(@Inject(Kafka) private kafka: Kafka, @Inject(PubSub) private pubsub: PubSub){
    this.producer = kafka.producer();
    this.consumer = kafka.consumer({ 
      groupId: "group1",
      minBytes: 10000,
      maxBytes: 2000, 
     });
    this.init()
   }

  async init() {
    await this.producer.connect();
    await this.consumer.connect();
    await this.consumer.subscribe({ topic: "satori-topic" });

    await this.consumer.run({
      eachBatch: async ({
        batch,
        resolveOffset,
        heartbeat,
        commitOffsetsIfNecessary,
        isRunning,
        isStale,
      }) => {
        const satoriFromKafka: Satori[] = [];
        const offsets: Offsets[] = [];
        for (let message of batch.messages) {
          if (!isRunning() || isStale()) break;
          satoriFromKafka.push(JSON.parse(message.value.toString()) as Satori)
        }
        await this.producer.send({
          topic: "satori-ch-topic",
          messages: satoriFromKafka.map((value) => ({ value: JSON.stringify(value) })),
        });

        await this.pubsub.publish("SATORI_FROM_KAFKA", { satoriFromKafka });
      },
    });
  }
}
