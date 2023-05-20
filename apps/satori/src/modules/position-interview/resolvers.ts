import { PositionInterviewModule } from "./generated-types/module-types";
import { PrismaProvider } from "../common/prisma.provider";
import * as _ from "lodash";


const resolvers: PositionInterviewModule.Resolvers = {
  Query: {
    getPositionInterview:  async (parent, args, context) => {
      const prisma: PrismaProvider = context.injector.get(PrismaProvider);
      return prisma.positionInterview.findUniqueOrThrow({
        where: { id: args.id },
      })
    },
    getPositionInterviews:  async (parent, args, context) => {
      const prisma: PrismaProvider = context.injector.get(PrismaProvider);
      return prisma.positionInterview.findMany({
      })
    },
  },
 
  Mutation: {
    createPositionInterview:  async (parent, args, context) => {
      const prisma: PrismaProvider = context.injector.get(PrismaProvider);
      const data = args.input;
      const positionInterview = await prisma.positionInterview.create({data})
      return positionInterview
    },
    updatePositionInterview:  async (parent, args, context) => {
      const prisma: PrismaProvider = context.injector.get(PrismaProvider);
      const data = args.input;
      const positionInterview = await prisma.positionInterview.update({
        where: { id: args.input.id },
        data,
      })
      return positionInterview
    },
  },
}

export default resolvers;