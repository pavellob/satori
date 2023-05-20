import { InterviewStatus, InterviewType, PositionStatus, Prisma } from "@prisma/client";
import { PrismaProvider } from "../common/prisma.provider";
import { PositionModule } from "./generated-types/module-types";
import * as _ from "lodash";

const resolvers: PositionModule.Resolvers = {
  Query: {
    getPosition: async (parent, args, context) => {
      const prisma: PrismaProvider = context.injector.get(PrismaProvider);
      return prisma.position.findUniqueOrThrow({
        where: { id: args.id },
      });
    },
    getPositions: async (parent, args, context) => {
      const prisma: PrismaProvider = context.injector.get(PrismaProvider);
      return prisma.position.findMany({});
    },
  },

  Mutation: {
    createPosition: async (parent, args, context) => {
      const prisma: PrismaProvider = context.injector.get(PrismaProvider);
      const data: Prisma.PositionCreateInput = {
        ...args.input,
        requirements: { connect: args.input?.requirements?.map((id: string) => ({ id })) },
        createdBy: { connect: { id: "af4171a5-6eee-48c4-922b-e156f9cfe658" }},

      };
      const position = await prisma.position.create({
        data,
      });
      return position;
    },
    updatePosition: async (parent, args, context) => {
      const prisma: PrismaProvider = context.injector.get(PrismaProvider);

      const data: Prisma.PositionUpdateInput = {
        ...args.input,
        requirements: { connect: args.input?.requirements?.map((id: string) => ({ id })) },
      };
      const position = await prisma.position.update({
        where: { id: args.input.id },
        data,
      });
      return position;
    },
  },
};

export default resolvers;
