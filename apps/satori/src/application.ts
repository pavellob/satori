import { createApplication } from "graphql-modules";
import userModule from "./modules/user";
import commonModule from "./modules/common";
import satoriModule from "./modules/satori";
import satoriScoreModule from "./modules/satori-score";
import satoriMapModule from "./modules/satori-map";
import positionInterviewModule from "./modules/position-interview";
import positionModule from "./modules/position";
import { PubSub } from "graphql-subscriptions";
import { PrismaProvider } from "./modules/common/prisma.provider";
import { Kafka } from "kafkajs";

const application = createApplication({
  modules: [
    commonModule,
    userModule,
    satoriModule,
    satoriScoreModule,
    satoriMapModule,
    positionInterviewModule,
    positionModule,
  ],
  providers: [
    PrismaProvider,
    {
      provide: Kafka,
      useValue: new Kafka({
        clientId: "satori-app",
        brokers: [process.env.BROKERS],
      }),
    },
    {
      provide: PubSub,
      useValue: new PubSub(),
    },
  ],
});

export default application;
