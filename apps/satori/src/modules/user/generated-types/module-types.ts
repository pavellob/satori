import * as Types from "../../../generated-types/graphql";
import * as gm from "graphql-modules";
export namespace UserModule {
  interface DefinedFields {
    User: 'id' | 'email' | 'name' | 'description';
    Query: 'me' | 'getUser' | 'getUsers';
    Mutation: 'createUser';
    SatoriScore: 'createdBy';
    Position: 'createdBy';
    PositionInterview: 'candidate';
  };
  
  interface DefinedInputFields {
    CreateUserInput: 'email' | 'name' | 'description';
  };
  
  export type User = Pick<Types.User, DefinedFields['User']>;
  export type UUID = Types.Uuid;
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>;
  export type CreateUserInput = Pick<Types.CreateUserInput, DefinedInputFields['CreateUserInput']>;
  export type SatoriScore = Types.SatoriScore;
  export type Position = Types.Position;
  export type PositionInterview = Types.PositionInterview;
  
  export type UserResolvers = Pick<Types.UserResolvers, DefinedFields['User'] | '__isTypeOf'>;
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type MutationResolvers = Pick<Types.MutationResolvers, DefinedFields['Mutation']>;
  export type SatoriScoreResolvers = Pick<Types.SatoriScoreResolvers, DefinedFields['SatoriScore']>;
  export type PositionResolvers = Pick<Types.PositionResolvers, DefinedFields['Position']>;
  export type PositionInterviewResolvers = Pick<Types.PositionInterviewResolvers, DefinedFields['PositionInterview']>;
  
  export interface Resolvers {
    User?: UserResolvers;
    Query?: QueryResolvers;
    Mutation?: MutationResolvers;
    SatoriScore?: SatoriScoreResolvers;
    Position?: PositionResolvers;
    PositionInterview?: PositionInterviewResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    User?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      email?: gm.Middleware[];
      name?: gm.Middleware[];
      description?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      me?: gm.Middleware[];
      getUser?: gm.Middleware[];
      getUsers?: gm.Middleware[];
    };
    Mutation?: {
      '*'?: gm.Middleware[];
      createUser?: gm.Middleware[];
    };
    SatoriScore?: {
      '*'?: gm.Middleware[];
      createdBy?: gm.Middleware[];
    };
    Position?: {
      '*'?: gm.Middleware[];
      createdBy?: gm.Middleware[];
    };
    PositionInterview?: {
      '*'?: gm.Middleware[];
      candidate?: gm.Middleware[];
    };
  };
}