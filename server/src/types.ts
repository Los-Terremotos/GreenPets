import { GraphQLResolveInfo } from 'graphql';
import { PlantListModel, PlantDetailsModel, ImageUrlModel, DimensionsModel, MeasurementsModel, UserInfoModel } from './models';
import { DataSourceContext } from './context';
import { PlantBasic, PlantExpanded } from "./datasources/plants-api";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/** Range of possible plant dimensions */
export type Dimensions = {
  __typename?: 'Dimensions';
  max_value?: Maybe<Scalars['Float']['output']>;
  min_value?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  unit?: Maybe<Scalars['String']['output']>;
};

/** Used to retrieve the image URL associated with the plant */
export type ImageUrl = {
  __typename?: 'ImageUrl';
  thumbnail?: Maybe<Scalars['String']['output']>;
};

/** Measurements of the plant */
export type Measurements = {
  __typename?: 'Measurements';
  maxValue?: Maybe<Scalars['Float']['output']>;
  minValue?: Maybe<Scalars['Float']['output']>;
  unit?: Maybe<Scalars['String']['output']>;
};

/** Additional plant info which contains more more specific information on plants */
export type PlantDetails = {
  __typename?: 'PlantDetails';
  attracts?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  care_level?: Maybe<Scalars['String']['output']>;
  common_name: Scalars['String']['output'];
  cycle?: Maybe<Scalars['String']['output']>;
  default_image?: Maybe<ImageUrl>;
  depth_water_requirement?: Maybe<Measurements>;
  description?: Maybe<Scalars['String']['output']>;
  dimensions?: Maybe<Dimensions>;
  drought_tolerant?: Maybe<Scalars['Boolean']['output']>;
  flowering_season?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  indoor?: Maybe<Scalars['Boolean']['output']>;
  poisonous_to_humans?: Maybe<Scalars['Boolean']['output']>;
  poisonous_to_pets?: Maybe<Scalars['Boolean']['output']>;
  pruning_month?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  scientific_name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  sunlight?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  tropical?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  volume_water_requirement?: Maybe<Measurements>;
  water_period?: Maybe<Scalars['String']['output']>;
  watering?: Maybe<Scalars['String']['output']>;
  watering_general_benchmark?: Maybe<Measurements>;
};

/** Initial plant info, which contains very basic information */
export type PlantList = {
  __typename?: 'PlantList';
  common_name?: Maybe<Scalars['String']['output']>;
  default_image?: Maybe<ImageUrl>;
  id: Scalars['ID']['output'];
  watering?: Maybe<Scalars['String']['output']>;
};

export type Query = {
  __typename?: 'Query';
  /** Query to get basic plant info */
  plantsBasicInfo?: Maybe<Array<Maybe<PlantList>>>;
  /** Query to get more specific plant info for a single plant */
  plantsMoreInfo?: Maybe<PlantDetails>;
};


export type QueryPlantsBasicInfoArgs = {
  inputNumber: Scalars['Int']['input'];
  inputString: Scalars['String']['input'];
};


export type QueryPlantsMoreInfoArgs = {
  id: Scalars['String']['input'];
};

export type UserInfo = {
  __typename?: 'UserInfo';
  favoritePlants?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  id: Scalars['ID']['output'];
  userLocation: Scalars['String']['output'];
  userName: Scalars['String']['output'];
  userPassword: Scalars['String']['output'];
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
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Dimensions: ResolverTypeWrapper<Dimensions>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  ImageUrl: ResolverTypeWrapper<ImageUrl>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Measurements: ResolverTypeWrapper<Measurements>;
  PlantDetails: ResolverTypeWrapper<PlantDetailsModel>;
  PlantList: ResolverTypeWrapper<PlantListModel>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UserInfo: ResolverTypeWrapper<UserInfo>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars['Boolean']['output'];
  Dimensions: Dimensions;
  Float: Scalars['Float']['output'];
  ID: Scalars['ID']['output'];
  ImageUrl: ImageUrl;
  Int: Scalars['Int']['output'];
  Measurements: Measurements;
  PlantDetails: PlantDetailsModel;
  PlantList: PlantListModel;
  Query: {};
  String: Scalars['String']['output'];
  UserInfo: UserInfo;
};

export type DimensionsResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Dimensions'] = ResolversParentTypes['Dimensions']> = {
  max_value?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  min_value?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageUrlResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['ImageUrl'] = ResolversParentTypes['ImageUrl']> = {
  thumbnail?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MeasurementsResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Measurements'] = ResolversParentTypes['Measurements']> = {
  maxValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  minValue?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  unit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlantDetailsResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['PlantDetails'] = ResolversParentTypes['PlantDetails']> = {
  attracts?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  care_level?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  common_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  cycle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default_image?: Resolver<Maybe<ResolversTypes['ImageUrl']>, ParentType, ContextType>;
  depth_water_requirement?: Resolver<Maybe<ResolversTypes['Measurements']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dimensions?: Resolver<Maybe<ResolversTypes['Dimensions']>, ParentType, ContextType>;
  drought_tolerant?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  flowering_season?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  indoor?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  poisonous_to_humans?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  poisonous_to_pets?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  pruning_month?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  scientific_name?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  sunlight?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  tropical?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  volume_water_requirement?: Resolver<Maybe<ResolversTypes['Measurements']>, ParentType, ContextType>;
  water_period?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  watering?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  watering_general_benchmark?: Resolver<Maybe<ResolversTypes['Measurements']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlantListResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['PlantList'] = ResolversParentTypes['PlantList']> = {
  common_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default_image?: Resolver<Maybe<ResolversTypes['ImageUrl']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  watering?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  plantsBasicInfo?: Resolver<Maybe<Array<Maybe<ResolversTypes['PlantList']>>>, ParentType, ContextType, RequireFields<QueryPlantsBasicInfoArgs, 'inputNumber' | 'inputString'>>;
  plantsMoreInfo?: Resolver<Maybe<ResolversTypes['PlantDetails']>, ParentType, ContextType, RequireFields<QueryPlantsMoreInfoArgs, 'id'>>;
};

export type UserInfoResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['UserInfo'] = ResolversParentTypes['UserInfo']> = {
  favoritePlants?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  userLocation?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  userPassword?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = DataSourceContext> = {
  Dimensions?: DimensionsResolvers<ContextType>;
  ImageUrl?: ImageUrlResolvers<ContextType>;
  Measurements?: MeasurementsResolvers<ContextType>;
  PlantDetails?: PlantDetailsResolvers<ContextType>;
  PlantList?: PlantListResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  UserInfo?: UserInfoResolvers<ContextType>;
};

