import { createModule } from 'graphql-modules';
import * as schema from './typeDefs/satori-map.graphql';
import resolvers from './resolvers';
import { PrismaProvider } from '../common/prisma.provider';

export default createModule({
  id: 'satori-map-module',
  dirname: __dirname,
  typeDefs: [schema],
  resolvers,
  providers: [PrismaProvider],
});