import * as Types from "../../../generated-types/graphql";
import * as gm from "graphql-modules";
export namespace SatoriModule {
  interface DefinedFields {
    Query: 'getSatori' | 'getSatoriList';
    Mutation: 'createSatori' | 'updateSatori';
    Subscription: 'satoriCreated' | 'satoriFromKafka';
    Satori: 'id' | 'name' | 'description' | 'type' | 'defaultScoreTemplate';
  };
  
  interface DefinedEnumValues {
    SatoriType: 'Hard' | 'Soft' | 'Other';
  };
  
  interface DefinedInputFields {
    CreateSatoriInput: 'name' | 'type' | 'defaultScoreTemplate' | 'description';
    UpdateSatoriInput: 'id' | 'name' | 'type' | 'description' | 'defaultScoreTemplate';
  };
  
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type Satori = Pick<Types.Satori, DefinedFields['Satori']>;
  export type UUID = Types.Uuid;
  export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>;
  export type CreateSatoriInput = Pick<Types.CreateSatoriInput, DefinedInputFields['CreateSatoriInput']>;
  export type UpdateSatoriInput = Pick<Types.UpdateSatoriInput, DefinedInputFields['UpdateSatoriInput']>;
  export type Subscription = Pick<Types.Subscription, DefinedFields['Subscription']>;
  export type SatoriType = DefinedEnumValues['SatoriType'];
  export type SatoriScoreTemplate = Types.SatoriScoreTemplate;
  
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type MutationResolvers = Pick<Types.MutationResolvers, DefinedFields['Mutation']>;
  export type SubscriptionResolvers = Pick<Types.SubscriptionResolvers, DefinedFields['Subscription']>;
  export type SatoriResolvers = Pick<Types.SatoriResolvers, DefinedFields['Satori'] | '__isTypeOf'>;
  
  export interface Resolvers {
    Query?: QueryResolvers;
    Mutation?: MutationResolvers;
    Subscription?: SubscriptionResolvers;
    Satori?: SatoriResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      getSatori?: gm.Middleware[];
      getSatoriList?: gm.Middleware[];
    };
    Mutation?: {
      '*'?: gm.Middleware[];
      createSatori?: gm.Middleware[];
      updateSatori?: gm.Middleware[];
    };
    Subscription?: {
      '*'?: gm.Middleware[];
      satoriCreated?: gm.Middleware[];
      satoriFromKafka?: gm.Middleware[];
    };
    Satori?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      name?: gm.Middleware[];
      description?: gm.Middleware[];
      type?: gm.Middleware[];
      defaultScoreTemplate?: gm.Middleware[];
    };
  };
}