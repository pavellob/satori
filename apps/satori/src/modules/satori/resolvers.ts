import { SatoriModule } from "./generated-types/module-types";
import { PrismaProvider } from "../common/prisma.provider";
import { PubSub, PubSubEngine } from "graphql-subscriptions";
import { Kafka } from "kafkajs";
import { Satori } from "../generated-types/graphql";

const resolvers: SatoriModule.Resolvers = {
  Query: {
    getSatori: async (parent, args, context) => {
      const prisma: PrismaProvider = context.injector.get(PrismaProvider);
      return prisma.satori.findUniqueOrThrow({
        where: { id: args.id },
      });
    },
    getSatoriList: async (parent, args, context) => {
      const prisma: PrismaProvider = context.injector.get(PrismaProvider);
      return prisma.satori.findMany({});
    },
  },

  Mutation: {
    createSatori: async (parent, args, context) => {
      const prisma: PrismaProvider = context.injector.get(PrismaProvider);
      const data = args.input;
      const pubsub: PubSub = context.injector.get<PubSub>(PubSub);
      const satori = await prisma.satori.create({
        data,
      });
      pubsub.publish("SATORI_CREATED", { satoriCreated: satori });
      const kafka: Kafka =
        context.injector.get<Kafka>(Kafka);
      const producer = kafka.producer();

      await producer.connect();
      await producer.send({
        topic: "satori-topic",
        messages: [{ value: JSON.stringify(satori) }],
      });

      await producer.disconnect();
      return satori;
    },
    updateSatori: async (parent, args, context) => {
      const prisma: PrismaProvider = context.injector.get(PrismaProvider);
      const data = args.input;
      const satori = await prisma.satori.update({
        where: {
          id: args.input?.id,
        },
        data,
      });
      return satori;
    },
  },
  Subscription: {
    satoriCreated: {
      async subscribe(_root, _args, ctx) {
        if(ctx) {
          return ctx.injector.get<PubSub>(PubSub).asyncIterator<Satori>(["SATORI_CREATED"]);
        }
      },
    },
    satoriFromKafka: {
      async subscribe(_root, _args, { injector }){
        return injector.get<PubSub>(PubSub).asyncIterator<Satori[]>(["SATORI_FROM_KAFKA"]);
      },
    },
  },
};

export default resolvers;
