import * as Types from "../../../generated-types/graphql";
import * as gm from "graphql-modules";
export namespace SatoriScoreModule {
  interface DefinedFields {
    Query: 'getSatoriScore' | 'getSatoriScores';
    Mutation: 'scoreSatori';
    SatoriScore: 'id' | 'notes' | 'satori' | 'template' | 'value';
    SatoriMap: 'items';
  };
  
  interface DefinedEnumValues {
    SatoriScoreTemplate: 'TenStars' | 'FiveStars' | 'Percents' | 'YesNo';
  };
  
  interface DefinedInputFields {
    ScoreSatoriInput: 'satoriId' | 'value' | 'template' | 'notes';
  };
  
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type SatoriScore = Pick<Types.SatoriScore, DefinedFields['SatoriScore']>;
  export type UUID = Types.Uuid;
  export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>;
  export type ScoreSatoriInput = Pick<Types.ScoreSatoriInput, DefinedInputFields['ScoreSatoriInput']>;
  export type SatoriScoreTemplate = DefinedEnumValues['SatoriScoreTemplate'];
  export type Satori = Types.Satori;
  export type SatoriMap = Types.SatoriMap;
  
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type MutationResolvers = Pick<Types.MutationResolvers, DefinedFields['Mutation']>;
  export type SatoriScoreResolvers = Pick<Types.SatoriScoreResolvers, DefinedFields['SatoriScore'] | '__isTypeOf'>;
  export type SatoriMapResolvers = Pick<Types.SatoriMapResolvers, DefinedFields['SatoriMap']>;
  
  export interface Resolvers {
    Query?: QueryResolvers;
    Mutation?: MutationResolvers;
    SatoriScore?: SatoriScoreResolvers;
    SatoriMap?: SatoriMapResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      getSatoriScore?: gm.Middleware[];
      getSatoriScores?: gm.Middleware[];
    };
    Mutation?: {
      '*'?: gm.Middleware[];
      scoreSatori?: gm.Middleware[];
    };
    SatoriScore?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      notes?: gm.Middleware[];
      satori?: gm.Middleware[];
      template?: gm.Middleware[];
      value?: gm.Middleware[];
    };
    SatoriMap?: {
      '*'?: gm.Middleware[];
      items?: gm.Middleware[];
    };
  };
}