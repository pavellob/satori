import { SatoriMapModule } from "./generated-types/module-types";
import { PrismaProvider } from "../common/prisma.provider";
import { Prisma } from "@prisma/client";

const resolvers: SatoriMapModule.Resolvers = {
  Query: {
    getSatoriMap: async (parent, args, context) => {
      const prisma: PrismaProvider = context.injector.get(PrismaProvider);
      return prisma.satoriMap.findUnique({
        where: { id: args.id },
      })
    },
    getSatoriMaps: async (parent, args, context) => {
      const prisma = context.injector.get(PrismaProvider);
      return prisma.satoriMap.findMany({
      })
    },
  },
 
  Mutation: {
    createSatoriMap: async (parent, args, context) => {
      const prisma = context.injector.get(PrismaProvider);
      const data = args.input;

      const satoriMap = await prisma.satoriMap.create({
        data,
      })
      return satoriMap
    },
    updateSatoriMap: async (parent, args, context) => {
      const prisma: PrismaProvider = context.injector.get(PrismaProvider);
      const data: Prisma.SatoriMapUpdateInput = {
        ...args.input,
        items: {
          connect: args.input?.items?.map((id: string) => ({ id })) 
        },
      };
      const satoriMap = await prisma.satoriMap.update({
        where: { id: args.input.id },
        data,
      })
      return satoriMap;
    },
  },
}

export default resolvers;