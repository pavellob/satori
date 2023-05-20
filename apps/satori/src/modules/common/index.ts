import { createModule, gql } from 'graphql-modules';
import { resolvers } from 'graphql-scalars';
import scalarTypeDefs  from "./typeDefs/schema";

export default createModule({
  id: 'common-module',
  dirname: __dirname,
  typeDefs: gql(scalarTypeDefs),
  resolvers,
});

