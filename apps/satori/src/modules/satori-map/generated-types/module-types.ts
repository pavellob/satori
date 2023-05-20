import * as Types from "../../../generated-types/graphql";
import * as gm from "graphql-modules";
export namespace SatoriMapModule {
  interface DefinedFields {
    Query: 'getSatoriMap' | 'getSatoriMaps';
    Mutation: 'createSatoriMap' | 'updateSatoriMap';
    SatoriMap: 'id' | 'name' | 'description';
    Position: 'requirements';
    PositionInterview: 'score';
  };
  
  interface DefinedInputFields {
    CreateSatoriMapInput: 'name' | 'description' | 'items';
    UpdateSatoriMapInput: 'id' | 'name' | 'description' | 'items';
  };
  
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type SatoriMap = Pick<Types.SatoriMap, DefinedFields['SatoriMap']>;
  export type UUID = Types.Uuid;
  export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>;
  export type CreateSatoriMapInput = Pick<Types.CreateSatoriMapInput, DefinedInputFields['CreateSatoriMapInput']>;
  export type UpdateSatoriMapInput = Pick<Types.UpdateSatoriMapInput, DefinedInputFields['UpdateSatoriMapInput']>;
  export type Position = Types.Position;
  export type PositionInterview = Types.PositionInterview;
  
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type MutationResolvers = Pick<Types.MutationResolvers, DefinedFields['Mutation']>;
  export type SatoriMapResolvers = Pick<Types.SatoriMapResolvers, DefinedFields['SatoriMap'] | '__isTypeOf'>;
  export type PositionResolvers = Pick<Types.PositionResolvers, DefinedFields['Position']>;
  export type PositionInterviewResolvers = Pick<Types.PositionInterviewResolvers, DefinedFields['PositionInterview']>;
  
  export interface Resolvers {
    Query?: QueryResolvers;
    Mutation?: MutationResolvers;
    SatoriMap?: SatoriMapResolvers;
    Position?: PositionResolvers;
    PositionInterview?: PositionInterviewResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      getSatoriMap?: gm.Middleware[];
      getSatoriMaps?: gm.Middleware[];
    };
    Mutation?: {
      '*'?: gm.Middleware[];
      createSatoriMap?: gm.Middleware[];
      updateSatoriMap?: gm.Middleware[];
    };
    SatoriMap?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      name?: gm.Middleware[];
      description?: gm.Middleware[];
    };
    Position?: {
      '*'?: gm.Middleware[];
      requirements?: gm.Middleware[];
    };
    PositionInterview?: {
      '*'?: gm.Middleware[];
      score?: gm.Middleware[];
    };
  };
}