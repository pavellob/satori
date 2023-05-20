import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { User, Satori, Position, SatoriMap, PositionInterview } from '@prisma/client';
import { ModuleContext } from '@graphql-modules/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  UUID: any;
};

export type CreatePositionInput = {
  candidateId: Scalars['UUID'];
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  requirements?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  status: PositionStatus;
};

export type CreatePositionInterviewInput = {
  candidateId: Scalars['UUID'];
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  positionId: Scalars['UUID'];
  scoreId: Scalars['UUID'];
  status: InterviewStatus;
  type: InterviewType;
};

export type CreateSatoriInput = {
  defaultScoreTemplate: SatoriScoreTemplate;
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  type: SatoriType;
};

export type CreateSatoriMapInput = {
  description?: InputMaybe<Scalars['String']>;
  items?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  name: Scalars['String'];
};

export type CreateUserInput = {
  description?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  name: Scalars['String'];
};

export type InterviewStatus =
  | 'Active'
  | 'Closed'
  | 'Complete'
  | 'Draft';

export type InterviewType =
  | 'External'
  | 'Internal';

export type Mutation = {
  __typename?: 'Mutation';
  createPosition: Position;
  createPositionInterview: PositionInterview;
  createSatori: Satori;
  createSatoriMap?: Maybe<SatoriMap>;
  createUser: User;
  scoreSatori: SatoriScore;
  updatePosition: Position;
  updatePositionInterview: PositionInterview;
  updateSatori: Satori;
  updateSatoriMap?: Maybe<SatoriMap>;
};


export type MutationCreatePositionArgs = {
  input: CreatePositionInput;
};


export type MutationCreatePositionInterviewArgs = {
  input: CreatePositionInterviewInput;
};


export type MutationCreateSatoriArgs = {
  input: CreateSatoriInput;
};


export type MutationCreateSatoriMapArgs = {
  input: CreateSatoriMapInput;
};


export type MutationCreateUserArgs = {
  input: CreateUserInput;
};


export type MutationScoreSatoriArgs = {
  input: ScoreSatoriInput;
};


export type MutationUpdatePositionArgs = {
  input: UpdatePositionInput;
};


export type MutationUpdatePositionInterviewArgs = {
  input: UpdatePositionInterviewInput;
};


export type MutationUpdateSatoriArgs = {
  input: UpdateSatoriInput;
};


export type MutationUpdateSatoriMapArgs = {
  input: UpdateSatoriMapInput;
};

export type Position = {
  __typename?: 'Position';
  createdBy: User;
  description?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  interviews?: Maybe<Array<Maybe<PositionInterview>>>;
  name: Scalars['String'];
  requirements: Array<Maybe<SatoriMap>>;
  status: PositionStatus;
};

export type PositionInterview = {
  __typename?: 'PositionInterview';
  candidate: User;
  description?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  name: Scalars['String'];
  position: Position;
  score: SatoriMap;
  status: InterviewStatus;
  type: InterviewType;
};

export type PositionStatus =
  | 'Active'
  | 'Closed'
  | 'Complete'
  | 'Draft';

export type Query = {
  __typename?: 'Query';
  getPosition: Position;
  getPositionInterview: PositionInterview;
  getPositionInterviews?: Maybe<Array<Maybe<PositionInterview>>>;
  getPositions?: Maybe<Array<Maybe<Position>>>;
  getSatori: Satori;
  getSatoriList: Array<Maybe<Satori>>;
  getSatoriMap?: Maybe<SatoriMap>;
  getSatoriMaps?: Maybe<Array<Maybe<SatoriMap>>>;
  getSatoriScore: SatoriScore;
  getSatoriScores: Array<Maybe<SatoriScore>>;
  getUser: User;
  getUsers: Array<Maybe<User>>;
  me: User;
};


export type QueryGetPositionArgs = {
  id: Scalars['UUID'];
};


export type QueryGetPositionInterviewArgs = {
  id: Scalars['UUID'];
};


export type QueryGetSatoriArgs = {
  id: Scalars['UUID'];
};


export type QueryGetSatoriMapArgs = {
  id: Scalars['UUID'];
};


export type QueryGetSatoriScoreArgs = {
  id: Scalars['UUID'];
};


export type QueryGetUserArgs = {
  id: Scalars['UUID'];
};

export type Satori = {
  __typename?: 'Satori';
  defaultScoreTemplate: SatoriScoreTemplate;
  description?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  name: Scalars['String'];
  type: SatoriType;
};

export type SatoriMap = {
  __typename?: 'SatoriMap';
  description?: Maybe<Scalars['String']>;
  id: Scalars['UUID'];
  items?: Maybe<Array<Maybe<SatoriScore>>>;
  name: Scalars['String'];
};

export type SatoriScore = {
  __typename?: 'SatoriScore';
  createdBy: User;
  id: Scalars['UUID'];
  notes?: Maybe<Scalars['String']>;
  satori: Satori;
  template: SatoriScoreTemplate;
  value: Scalars['Int'];
};

export type SatoriScoreTemplate =
  | 'FiveStars'
  | 'Percents'
  | 'TenStars'
  | 'YesNo';

export type SatoriType =
  | 'Hard'
  | 'Other'
  | 'Soft';

export type ScoreSatoriInput = {
  notes?: InputMaybe<Scalars['String']>;
  satoriId: Scalars['UUID'];
  template: SatoriScoreTemplate;
  value: Scalars['Int'];
};

export type UpdatePositionInput = {
  candidateId?: InputMaybe<Scalars['UUID']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
  name: Scalars['String'];
  requirements?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  status?: InputMaybe<PositionStatus>;
};

export type UpdatePositionInterviewInput = {
  candidateId?: InputMaybe<Scalars['UUID']>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
  name?: InputMaybe<Scalars['String']>;
  positionId?: InputMaybe<Scalars['UUID']>;
  scoreId?: InputMaybe<Scalars['UUID']>;
  status?: InputMaybe<InterviewStatus>;
  type?: InputMaybe<InterviewType>;
};

export type UpdateSatoriInput = {
  defaultScoreTemplate?: InputMaybe<SatoriScoreTemplate>;
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
  name?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<SatoriType>;
};

export type UpdateSatoriMapInput = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['UUID'];
  items?: InputMaybe<Array<InputMaybe<Scalars['UUID']>>>;
  name?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  description?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  id: Scalars['UUID'];
  name: Scalars['String'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CreatePositionInput: CreatePositionInput;
  CreatePositionInterviewInput: CreatePositionInterviewInput;
  CreateSatoriInput: CreateSatoriInput;
  CreateSatoriMapInput: CreateSatoriMapInput;
  CreateUserInput: CreateUserInput;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  InterviewStatus: InterviewStatus;
  InterviewType: InterviewType;
  Mutation: ResolverTypeWrapper<{}>;
  Position: ResolverTypeWrapper<Position>;
  PositionInterview: ResolverTypeWrapper<PositionInterview>;
  PositionStatus: PositionStatus;
  Query: ResolverTypeWrapper<{}>;
  Satori: ResolverTypeWrapper<Satori>;
  SatoriMap: ResolverTypeWrapper<SatoriMap>;
  SatoriScore: ResolverTypeWrapper<Omit<SatoriScore, 'createdBy' | 'satori'> & { createdBy: ResolversTypes['User'], satori: ResolversTypes['Satori'] }>;
  SatoriScoreTemplate: SatoriScoreTemplate;
  SatoriType: SatoriType;
  ScoreSatoriInput: ScoreSatoriInput;
  String: ResolverTypeWrapper<Scalars['String']>;
  UUID: ResolverTypeWrapper<Scalars['UUID']>;
  UpdatePositionInput: UpdatePositionInput;
  UpdatePositionInterviewInput: UpdatePositionInterviewInput;
  UpdateSatoriInput: UpdateSatoriInput;
  UpdateSatoriMapInput: UpdateSatoriMapInput;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean'];
  CreatePositionInput: CreatePositionInput;
  CreatePositionInterviewInput: CreatePositionInterviewInput;
  CreateSatoriInput: CreateSatoriInput;
  CreateSatoriMapInput: CreateSatoriMapInput;
  CreateUserInput: CreateUserInput;
  Int: Scalars['Int'];
  Mutation: {};
  Position: Position;
  PositionInterview: PositionInterview;
  Query: {};
  Satori: Satori;
  SatoriMap: SatoriMap;
  SatoriScore: Omit<SatoriScore, 'createdBy' | 'satori'> & { createdBy: ResolversParentTypes['User'], satori: ResolversParentTypes['Satori'] };
  ScoreSatoriInput: ScoreSatoriInput;
  String: Scalars['String'];
  UUID: Scalars['UUID'];
  UpdatePositionInput: UpdatePositionInput;
  UpdatePositionInterviewInput: UpdatePositionInterviewInput;
  UpdateSatoriInput: UpdateSatoriInput;
  UpdateSatoriMapInput: UpdateSatoriMapInput;
  User: User;
};

export type MutationResolvers<ContextType = ModuleContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  createPosition?: Resolver<ResolversTypes['Position'], ParentType, ContextType, RequireFields<MutationCreatePositionArgs, 'input'>>;
  createPositionInterview?: Resolver<ResolversTypes['PositionInterview'], ParentType, ContextType, RequireFields<MutationCreatePositionInterviewArgs, 'input'>>;
  createSatori?: Resolver<ResolversTypes['Satori'], ParentType, ContextType, RequireFields<MutationCreateSatoriArgs, 'input'>>;
  createSatoriMap?: Resolver<Maybe<ResolversTypes['SatoriMap']>, ParentType, ContextType, RequireFields<MutationCreateSatoriMapArgs, 'input'>>;
  createUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<MutationCreateUserArgs, 'input'>>;
  scoreSatori?: Resolver<ResolversTypes['SatoriScore'], ParentType, ContextType, RequireFields<MutationScoreSatoriArgs, 'input'>>;
  updatePosition?: Resolver<ResolversTypes['Position'], ParentType, ContextType, RequireFields<MutationUpdatePositionArgs, 'input'>>;
  updatePositionInterview?: Resolver<ResolversTypes['PositionInterview'], ParentType, ContextType, RequireFields<MutationUpdatePositionInterviewArgs, 'input'>>;
  updateSatori?: Resolver<ResolversTypes['Satori'], ParentType, ContextType, RequireFields<MutationUpdateSatoriArgs, 'input'>>;
  updateSatoriMap?: Resolver<Maybe<ResolversTypes['SatoriMap']>, ParentType, ContextType, RequireFields<MutationUpdateSatoriMapArgs, 'input'>>;
};

export type PositionResolvers<ContextType = ModuleContext, ParentType extends ResolversParentTypes['Position'] = ResolversParentTypes['Position']> = {
  createdBy?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  interviews?: Resolver<Maybe<Array<Maybe<ResolversTypes['PositionInterview']>>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  requirements?: Resolver<Array<Maybe<ResolversTypes['SatoriMap']>>, ParentType, ContextType>;
  status?: Resolver<ResolversTypes['PositionStatus'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PositionInterviewResolvers<ContextType = ModuleContext, ParentType extends ResolversParentTypes['PositionInterview'] = ResolversParentTypes['PositionInterview']> = {
  candidate?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  position?: Resolver<ResolversTypes['Position'], ParentType, ContextType>;
  score?: Resolver<ResolversTypes['SatoriMap'], ParentType, ContextType>;
  status?: Resolver<ResolversTypes['InterviewStatus'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['InterviewType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = ModuleContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  getPosition?: Resolver<ResolversTypes['Position'], ParentType, ContextType, RequireFields<QueryGetPositionArgs, 'id'>>;
  getPositionInterview?: Resolver<ResolversTypes['PositionInterview'], ParentType, ContextType, RequireFields<QueryGetPositionInterviewArgs, 'id'>>;
  getPositionInterviews?: Resolver<Maybe<Array<Maybe<ResolversTypes['PositionInterview']>>>, ParentType, ContextType>;
  getPositions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Position']>>>, ParentType, ContextType>;
  getSatori?: Resolver<ResolversTypes['Satori'], ParentType, ContextType, RequireFields<QueryGetSatoriArgs, 'id'>>;
  getSatoriList?: Resolver<Array<Maybe<ResolversTypes['Satori']>>, ParentType, ContextType>;
  getSatoriMap?: Resolver<Maybe<ResolversTypes['SatoriMap']>, ParentType, ContextType, RequireFields<QueryGetSatoriMapArgs, 'id'>>;
  getSatoriMaps?: Resolver<Maybe<Array<Maybe<ResolversTypes['SatoriMap']>>>, ParentType, ContextType>;
  getSatoriScore?: Resolver<ResolversTypes['SatoriScore'], ParentType, ContextType, RequireFields<QueryGetSatoriScoreArgs, 'id'>>;
  getSatoriScores?: Resolver<Array<Maybe<ResolversTypes['SatoriScore']>>, ParentType, ContextType>;
  getUser?: Resolver<ResolversTypes['User'], ParentType, ContextType, RequireFields<QueryGetUserArgs, 'id'>>;
  getUsers?: Resolver<Array<Maybe<ResolversTypes['User']>>, ParentType, ContextType>;
  me?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
};

export type SatoriResolvers<ContextType = ModuleContext, ParentType extends ResolversParentTypes['Satori'] = ResolversParentTypes['Satori']> = {
  defaultScoreTemplate?: Resolver<ResolversTypes['SatoriScoreTemplate'], ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['SatoriType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SatoriMapResolvers<ContextType = ModuleContext, ParentType extends ResolversParentTypes['SatoriMap'] = ResolversParentTypes['SatoriMap']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  items?: Resolver<Maybe<Array<Maybe<ResolversTypes['SatoriScore']>>>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SatoriScoreResolvers<ContextType = ModuleContext, ParentType extends ResolversParentTypes['SatoriScore'] = ResolversParentTypes['SatoriScore']> = {
  createdBy?: Resolver<ResolversTypes['User'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  notes?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  satori?: Resolver<ResolversTypes['Satori'], ParentType, ContextType>;
  template?: Resolver<ResolversTypes['SatoriScoreTemplate'], ParentType, ContextType>;
  value?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface UuidScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['UUID'], any> {
  name: 'UUID';
}

export type UserResolvers<ContextType = ModuleContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['UUID'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = ModuleContext> = {
  Mutation?: MutationResolvers<ContextType>;
  Position?: PositionResolvers<ContextType>;
  PositionInterview?: PositionInterviewResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Satori?: SatoriResolvers<ContextType>;
  SatoriMap?: SatoriMapResolvers<ContextType>;
  SatoriScore?: SatoriScoreResolvers<ContextType>;
  UUID?: GraphQLScalarType;
  User?: UserResolvers<ContextType>;
};


export type Uuid = Scalars["UUID"];