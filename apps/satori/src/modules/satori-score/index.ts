import { createModule } from 'graphql-modules';
import * as schema from './typeDefs/satori-score.graphql';
import resolvers from './resolvers';
import { PrismaProvider } from '../common/prisma.provider';

export default createModule({
  id: 'satori-score-module',
  dirname: __dirname,
  typeDefs: [schema],
  resolvers,
  providers: [PrismaProvider],
});