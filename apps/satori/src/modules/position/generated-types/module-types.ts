import * as Types from "../../../generated-types/graphql";
import * as gm from "graphql-modules";
export namespace PositionModule {
  interface DefinedFields {
    Query: 'getPositions' | 'getPosition';
    Mutation: 'createPosition' | 'updatePosition';
    Position: 'id' | 'name' | 'description' | 'status' | 'interviews';
  };
  
  interface DefinedEnumValues {
    PositionStatus: 'Draft' | 'Active' | 'Complete' | 'Closed';
  };
  
  interface DefinedInputFields {
    UpdatePositionInput: 'id' | 'name' | 'requirements' | 'candidateId' | 'description' | 'status';
    CreatePositionInput: 'name' | 'candidateId' | 'status' | 'requirements' | 'description';
  };
  
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type Position = Pick<Types.Position, DefinedFields['Position']>;
  export type UUID = Types.Uuid;
  export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>;
  export type CreatePositionInput = Pick<Types.CreatePositionInput, DefinedInputFields['CreatePositionInput']>;
  export type UpdatePositionInput = Pick<Types.UpdatePositionInput, DefinedInputFields['UpdatePositionInput']>;
  export type PositionStatus = DefinedEnumValues['PositionStatus'];
  export type PositionInterview = Types.PositionInterview;
  
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type MutationResolvers = Pick<Types.MutationResolvers, DefinedFields['Mutation']>;
  export type PositionResolvers = Pick<Types.PositionResolvers, DefinedFields['Position'] | '__isTypeOf'>;
  
  export interface Resolvers {
    Query?: QueryResolvers;
    Mutation?: MutationResolvers;
    Position?: PositionResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      getPositions?: gm.Middleware[];
      getPosition?: gm.Middleware[];
    };
    Mutation?: {
      '*'?: gm.Middleware[];
      createPosition?: gm.Middleware[];
      updatePosition?: gm.Middleware[];
    };
    Position?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      name?: gm.Middleware[];
      description?: gm.Middleware[];
      status?: gm.Middleware[];
      interviews?: gm.Middleware[];
    };
  };
}