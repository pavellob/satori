import * as Types from "../../../generated-types/graphql";
import * as gm from "graphql-modules";
export namespace CommonModule {
  export type Scalars = Pick<Types.Scalars, 'UUID'>;
  export type UuidScalarConfig = Types.UuidScalarConfig;
  
  export interface Resolvers {
    UUID?: Types.Resolvers['UUID'];
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
  };
}