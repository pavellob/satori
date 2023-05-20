import * as Types from "../../../generated-types/graphql";
import * as gm from "graphql-modules";
export namespace PositionInterviewModule {
  interface DefinedFields {
    Query: 'getPositionInterview' | 'getPositionInterviews';
    Mutation: 'createPositionInterview' | 'updatePositionInterview';
    PositionInterview: 'id' | 'name' | 'description' | 'type' | 'status' | 'position';
  };
  
  interface DefinedEnumValues {
    InterviewType: 'Internal' | 'External';
    InterviewStatus: 'Draft' | 'Active' | 'Complete' | 'Closed';
  };
  
  interface DefinedInputFields {
    CreatePositionInterviewInput: 'name' | 'positionId' | 'candidateId' | 'scoreId' | 'description' | 'type' | 'status';
    UpdatePositionInterviewInput: 'id' | 'name' | 'positionId' | 'candidateId' | 'scoreId' | 'description' | 'type' | 'status';
  };
  
  export type Query = Pick<Types.Query, DefinedFields['Query']>;
  export type PositionInterview = Pick<Types.PositionInterview, DefinedFields['PositionInterview']>;
  export type UUID = Types.Uuid;
  export type Mutation = Pick<Types.Mutation, DefinedFields['Mutation']>;
  export type CreatePositionInterviewInput = Pick<Types.CreatePositionInterviewInput, DefinedInputFields['CreatePositionInterviewInput']>;
  export type UpdatePositionInterviewInput = Pick<Types.UpdatePositionInterviewInput, DefinedInputFields['UpdatePositionInterviewInput']>;
  export type InterviewType = DefinedEnumValues['InterviewType'];
  export type InterviewStatus = DefinedEnumValues['InterviewStatus'];
  export type Position = Types.Position;
  
  export type QueryResolvers = Pick<Types.QueryResolvers, DefinedFields['Query']>;
  export type MutationResolvers = Pick<Types.MutationResolvers, DefinedFields['Mutation']>;
  export type PositionInterviewResolvers = Pick<Types.PositionInterviewResolvers, DefinedFields['PositionInterview'] | '__isTypeOf'>;
  
  export interface Resolvers {
    Query?: QueryResolvers;
    Mutation?: MutationResolvers;
    PositionInterview?: PositionInterviewResolvers;
  };
  
  export interface MiddlewareMap {
    '*'?: {
      '*'?: gm.Middleware[];
    };
    Query?: {
      '*'?: gm.Middleware[];
      getPositionInterview?: gm.Middleware[];
      getPositionInterviews?: gm.Middleware[];
    };
    Mutation?: {
      '*'?: gm.Middleware[];
      createPositionInterview?: gm.Middleware[];
      updatePositionInterview?: gm.Middleware[];
    };
    PositionInterview?: {
      '*'?: gm.Middleware[];
      id?: gm.Middleware[];
      name?: gm.Middleware[];
      description?: gm.Middleware[];
      type?: gm.Middleware[];
      status?: gm.Middleware[];
      position?: gm.Middleware[];
    };
  };
}