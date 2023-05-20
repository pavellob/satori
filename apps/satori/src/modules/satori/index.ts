import { createModule } from 'graphql-modules';
import * as schema from './typeDefs/satori.graphql';
import resolvers from './resolvers';
import { KafkaService } from './kafka';

export default createModule({
  id: 'satori-module',
  dirname: __dirname,
  typeDefs: [schema],
  resolvers,
  providers: [ KafkaService ]
});