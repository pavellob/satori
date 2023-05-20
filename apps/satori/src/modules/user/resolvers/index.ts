import { UserModule } from "../generated-types/module-types";
import { PrismaProvider } from "../../common/prisma.provider";

const resolvers: UserModule.Resolvers = {
  Query: {
    me: async (root, args, context) => {
      const prisma: PrismaProvider = context.injector.get(PrismaProvider);
      return  prisma.user.findFirstOrThrow({})
    },
    getUser: async (root, args, context) => {
      const prisma: PrismaProvider = context.injector.get(PrismaProvider);
      return prisma.user.findFirstOrThrow()
    },
    getUsers: async (root, args, context) => {
      const prisma: PrismaProvider = context.injector.get(PrismaProvider);
      return prisma.user.findMany()
    },
  },
  Mutation: {
    createUser: async (root, args, context) => {
      const prisma: PrismaProvider = context.injector.get(PrismaProvider);
      const data = args.input;
      return prisma.user.create({ data });
    }
  },
  User: {
    id(user) {
      return user.id;
    },
    name(user) {
      return user.name;
    },
    description(user) {
      return user.description;
    },
    email(user) {
      return user.email;
    },
  },
}

export default resolvers;