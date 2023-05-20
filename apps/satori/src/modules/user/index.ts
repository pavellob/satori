import { createModule, gql } from 'graphql-modules';
import * as schema from './typeDefs/user.graphql';
import resolvers from './resolvers';
import { PrismaProvider } from '../common/prisma.provider';

export default createModule({
  id: 'user-module',
  dirname: __dirname,
  typeDefs: [schema],
  resolvers,
  providers: [PrismaProvider]
});