import { createModule } from 'graphql-modules';
import * as schema from './typeDefs/position.graphql';
import resolvers from './resolvers';
import { PrismaProvider } from '../common/prisma.provider';

export default createModule({
  id: 'position-module',
  dirname: __dirname,
  typeDefs: [schema],
  resolvers,
  providers: [PrismaProvider],
});