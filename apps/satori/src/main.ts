import { createYoga } from "graphql-yoga";
import 'graphql-import-node';
import 'reflect-metadata';
import { createServer } from 'node:http'
import { useGraphQLModules } from '@envelop/graphql-modules'
import application from "./application";

async function main() {
  const yoga = createYoga({
    plugins: [useGraphQLModules(application)],
  });
  const server = createServer(yoga);
  server.listen(4000, () => {
    console.info("Server is running on http://localhost:4000/graphql");
  });

}

main();
