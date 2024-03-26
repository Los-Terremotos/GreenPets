import { GraphQLResolveInfo } from 'graphql';
import { PlantListModel, PlantDetailsModel, ImageUrlModel, DimensionsModel, MeasurementsModel, UserInfoModel } from './models';
import { DataSourceContext } from './context';
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

/** Provides a visual desciption of the plant */
export type Anatomy = {
  __typename?: 'Anatomy';
  color?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  part?: Maybe<Scalars['String']['output']>;
};

/** Range of possible plant dimensions */
export type Dimensions = {
  __typename?: 'Dimensions';
  max_value?: Maybe<Scalars['Float']['output']>;
  min_value?: Maybe<Scalars['Float']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  unit?: Maybe<Scalars['String']['output']>;
};

/** Hardiness location image */
export type HardinessLocation = {
  __typename?: 'HardinessLocation';
  full_iframe?: Maybe<Scalars['String']['output']>;
  full_url?: Maybe<Scalars['String']['output']>;
};

/** Measurements of plant hardiness */
export type HardinessMeasurements = {
  __typename?: 'HardinessMeasurements';
  max?: Maybe<Scalars['String']['output']>;
  min?: Maybe<Scalars['String']['output']>;
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
  care_guides?: Maybe<Scalars['String']['output']>;
  care_level?: Maybe<Scalars['String']['output']>;
  common_name: Scalars['String']['output'];
  cones?: Maybe<Scalars['Boolean']['output']>;
  cuisine?: Maybe<Scalars['Boolean']['output']>;
  cycle?: Maybe<Scalars['String']['output']>;
  default_image?: Maybe<ImageUrl>;
  depth_water_requirement?: Maybe<Water>;
  description?: Maybe<Scalars['String']['output']>;
  dimension?: Maybe<Scalars['String']['output']>;
  dimensions?: Maybe<Dimensions>;
  drought_tolerant?: Maybe<Scalars['Boolean']['output']>;
  edible_fruit?: Maybe<Scalars['Boolean']['output']>;
  edible_leaf?: Maybe<Scalars['Boolean']['output']>;
  family?: Maybe<Scalars['String']['output']>;
  flower_color?: Maybe<Scalars['String']['output']>;
  flowering_season?: Maybe<Scalars['String']['output']>;
  flowers?: Maybe<Scalars['Boolean']['output']>;
  fruit_color?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  fruits?: Maybe<Scalars['Boolean']['output']>;
  growth_rate?: Maybe<Scalars['String']['output']>;
  hardiness?: Maybe<HardinessMeasurements>;
  hardiness_location?: Maybe<HardinessLocation>;
  harvest_season?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  indoor?: Maybe<Scalars['Boolean']['output']>;
  invasive?: Maybe<Scalars['Boolean']['output']>;
  leaf?: Maybe<Scalars['Boolean']['output']>;
  leaf_color?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  maintenance?: Maybe<Scalars['String']['output']>;
  medicinal?: Maybe<Scalars['Boolean']['output']>;
  origin?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  other_name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  plant_anatomy?: Maybe<Array<Maybe<Anatomy>>>;
  poisonous_to_humans?: Maybe<Scalars['Boolean']['output']>;
  poisonous_to_pets?: Maybe<Scalars['Boolean']['output']>;
  propagation?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  pruning_count?: Maybe<Pruning>;
  pruning_month?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  salt_tolerant?: Maybe<Scalars['Boolean']['output']>;
  scientific_name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  seeds?: Maybe<Scalars['Float']['output']>;
  soil?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  sunlight?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  thorny?: Maybe<Scalars['Boolean']['output']>;
  tropical?: Maybe<Scalars['Boolean']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  volume_water_requirement?: Maybe<Water>;
  watering?: Maybe<Scalars['String']['output']>;
  watering_general_benchmark?: Maybe<Water>;
  watering_period?: Maybe<Scalars['String']['output']>;
};

/** Initial plant info, which contains very basic information */
export type PlantList = {
  __typename?: 'PlantList';
  common_name?: Maybe<Scalars['String']['output']>;
  default_image?: Maybe<ImageUrl>;
  id: Scalars['ID']['output'];
  watering?: Maybe<Scalars['String']['output']>;
};

/** Provides the amount and how often plants can be pruned */
export type Pruning = {
  __typename?: 'Pruning';
  amount?: Maybe<Scalars['Float']['output']>;
  interval?: Maybe<Scalars['String']['output']>;
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

/** Water measurements */
export type Water = {
  __typename?: 'Water';
  unit?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
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
  Anatomy: ResolverTypeWrapper<Anatomy>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Dimensions: ResolverTypeWrapper<Dimensions>;
  Float: ResolverTypeWrapper<Scalars['Float']['output']>;
  HardinessLocation: ResolverTypeWrapper<HardinessLocation>;
  HardinessMeasurements: ResolverTypeWrapper<HardinessMeasurements>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  ImageUrl: ResolverTypeWrapper<ImageUrl>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Measurements: ResolverTypeWrapper<Measurements>;
  PlantDetails: ResolverTypeWrapper<PlantDetailsModel>;
  PlantList: ResolverTypeWrapper<PlantListModel>;
  Pruning: ResolverTypeWrapper<Pruning>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  UserInfo: ResolverTypeWrapper<UserInfo>;
  Water: ResolverTypeWrapper<Water>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Anatomy: Anatomy;
  Boolean: Scalars['Boolean']['output'];
  Dimensions: Dimensions;
  Float: Scalars['Float']['output'];
  HardinessLocation: HardinessLocation;
  HardinessMeasurements: HardinessMeasurements;
  ID: Scalars['ID']['output'];
  ImageUrl: ImageUrl;
  Int: Scalars['Int']['output'];
  Measurements: Measurements;
  PlantDetails: PlantDetailsModel;
  PlantList: PlantListModel;
  Pruning: Pruning;
  Query: {};
  String: Scalars['String']['output'];
  UserInfo: UserInfo;
  Water: Water;
};

export type AnatomyResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Anatomy'] = ResolversParentTypes['Anatomy']> = {
  color?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  part?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type DimensionsResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Dimensions'] = ResolversParentTypes['Dimensions']> = {
  max_value?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  min_value?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  unit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HardinessLocationResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['HardinessLocation'] = ResolversParentTypes['HardinessLocation']> = {
  full_iframe?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  full_url?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type HardinessMeasurementsResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['HardinessMeasurements'] = ResolversParentTypes['HardinessMeasurements']> = {
  max?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  min?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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
  care_guides?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  care_level?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  common_name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  cones?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  cuisine?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  cycle?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default_image?: Resolver<Maybe<ResolversTypes['ImageUrl']>, ParentType, ContextType>;
  depth_water_requirement?: Resolver<Maybe<ResolversTypes['Water']>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dimension?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  dimensions?: Resolver<Maybe<ResolversTypes['Dimensions']>, ParentType, ContextType>;
  drought_tolerant?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  edible_fruit?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  edible_leaf?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  family?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  flower_color?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  flowering_season?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  flowers?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  fruit_color?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  fruits?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  growth_rate?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hardiness?: Resolver<Maybe<ResolversTypes['HardinessMeasurements']>, ParentType, ContextType>;
  hardiness_location?: Resolver<Maybe<ResolversTypes['HardinessLocation']>, ParentType, ContextType>;
  harvest_season?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  indoor?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  invasive?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  leaf?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  leaf_color?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  maintenance?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  medicinal?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  origin?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  other_name?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  plant_anatomy?: Resolver<Maybe<Array<Maybe<ResolversTypes['Anatomy']>>>, ParentType, ContextType>;
  poisonous_to_humans?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  poisonous_to_pets?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  propagation?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  pruning_count?: Resolver<Maybe<ResolversTypes['Pruning']>, ParentType, ContextType>;
  pruning_month?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  salt_tolerant?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  scientific_name?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  seeds?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  soil?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  sunlight?: Resolver<Maybe<Array<Maybe<ResolversTypes['String']>>>, ParentType, ContextType>;
  thorny?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  tropical?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  volume_water_requirement?: Resolver<Maybe<ResolversTypes['Water']>, ParentType, ContextType>;
  watering?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  watering_general_benchmark?: Resolver<Maybe<ResolversTypes['Water']>, ParentType, ContextType>;
  watering_period?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PlantListResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['PlantList'] = ResolversParentTypes['PlantList']> = {
  common_name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  default_image?: Resolver<Maybe<ResolversTypes['ImageUrl']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  watering?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PruningResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Pruning'] = ResolversParentTypes['Pruning']> = {
  amount?: Resolver<Maybe<ResolversTypes['Float']>, ParentType, ContextType>;
  interval?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
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

export type WaterResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Water'] = ResolversParentTypes['Water']> = {
  unit?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  value?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = DataSourceContext> = {
  Anatomy?: AnatomyResolvers<ContextType>;
  Dimensions?: DimensionsResolvers<ContextType>;
  HardinessLocation?: HardinessLocationResolvers<ContextType>;
  HardinessMeasurements?: HardinessMeasurementsResolvers<ContextType>;
  ImageUrl?: ImageUrlResolvers<ContextType>;
  Measurements?: MeasurementsResolvers<ContextType>;
  PlantDetails?: PlantDetailsResolvers<ContextType>;
  PlantList?: PlantListResolvers<ContextType>;
  Pruning?: PruningResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  UserInfo?: UserInfoResolvers<ContextType>;
  Water?: WaterResolvers<ContextType>;
};

