import { Prisma } from "@prisma/client";
import { SatoriScoreModule } from "./generated-types/module-types";
import { PrismaProvider } from "../common/prisma.provider";

const resolvers: SatoriScoreModule.Resolvers = {
  Mutation: {
    scoreSatori: async (parent, args, context) => {
      const prisma: PrismaProvider = context.injector.get(PrismaProvider);
      const data = {
        ...args.input,
        createdById: "af4171a5-6eee-48c4-922b-e156f9cfe658",
      };
      const satoriScore = await prisma.satoriScore.create({
        data,
        include: {
          createdBy: true,
          satori: true,
        }
      });
      return satoriScore
    },
  },
}

export default resolvers;