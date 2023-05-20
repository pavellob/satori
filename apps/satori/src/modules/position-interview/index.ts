import { createModule } from 'graphql-modules';
import * as schema from './typeDefs/position-interview.graphql';
import resolvers from './resolvers';
import { PrismaProvider } from '../common/prisma.provider';

export default createModule({
  id: 'position-interview-module',
  dirname: __dirname,
  typeDefs: [schema],
  resolvers,
  providers: [PrismaProvider],
});