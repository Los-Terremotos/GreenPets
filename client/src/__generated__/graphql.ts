/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/** Used to retrieve the image URL associated with the plant */
export type ImageUrl = {
  __typename?: 'ImageUrl';
  thumbnail?: Maybe<Scalars['String']['output']>;
};

/** Additional plant info which contains more more specific information on plants */
export type PlantDetails = {
  __typename?: 'PlantDetails';
  care_guides?: Maybe<Scalars['String']['output']>;
  care_level?: Maybe<Scalars['String']['output']>;
  common_name: Scalars['String']['output'];
  cones?: Maybe<Scalars['Boolean']['output']>;
  cuisine?: Maybe<Scalars['Boolean']['output']>;
  cycle?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  dimension?: Maybe<Scalars['String']['output']>;
  edible_fruit?: Maybe<Scalars['Boolean']['output']>;
  edible_leaf?: Maybe<Scalars['Boolean']['output']>;
  family?: Maybe<Scalars['String']['output']>;
  flower_color?: Maybe<Scalars['String']['output']>;
  flowering_season?: Maybe<Scalars['String']['output']>;
  flowers?: Maybe<Scalars['Boolean']['output']>;
  fruit_color?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  fruits?: Maybe<Scalars['Boolean']['output']>;
  growth_rate?: Maybe<Scalars['String']['output']>;
  harvest_season?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  invasive?: Maybe<Scalars['Boolean']['output']>;
  leaf?: Maybe<Scalars['Boolean']['output']>;
  leaf_color?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  maintenance?: Maybe<Scalars['String']['output']>;
  medicinal?: Maybe<Scalars['Boolean']['output']>;
  origin?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  other_name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  poisonous_to_humans?: Maybe<Scalars['Boolean']['output']>;
  poisonous_to_pets?: Maybe<Scalars['Boolean']['output']>;
  propagation?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  pruning_month?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  scientific_name?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  sunlight?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  thorny?: Maybe<Scalars['Boolean']['output']>;
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

export type PlantsBasicInfoQueryVariables = Exact<{
  inputNumber: Scalars['Int']['input'];
  inputString: Scalars['String']['input'];
}>;


export type PlantsBasicInfoQuery = { __typename?: 'Query', plantsBasicInfo?: Array<{ __typename?: 'PlantList', id: string, common_name?: string | null, watering?: string | null, default_image?: { __typename?: 'ImageUrl', thumbnail?: string | null } | null } | null> | null };

export type PlantsMoreInfoQueryVariables = Exact<{
  plantsMoreInfoId: Scalars['String']['input'];
}>;


export type PlantsMoreInfoQuery = { __typename?: 'Query', plantsMoreInfo?: { __typename?: 'PlantDetails', id: string, common_name: string, scientific_name?: Array<string | null> | null, other_name?: Array<string | null> | null, family?: string | null, origin?: Array<string | null> | null, dimension?: string | null, cycle?: string | null, propagation?: Array<string | null> | null, sunlight?: Array<string | null> | null, pruning_month?: Array<string | null> | null, maintenance?: string | null, care_guides?: string | null, growth_rate?: string | null, thorny?: boolean | null, invasive?: boolean | null, care_level?: string | null, flowers?: boolean | null, flower_color?: string | null, cones?: boolean | null, fruits?: boolean | null, edible_fruit?: boolean | null, fruit_color?: Array<string | null> | null, harvest_season?: string | null, leaf?: boolean | null, leaf_color?: Array<string | null> | null, edible_leaf?: boolean | null, cuisine?: boolean | null, medicinal?: boolean | null, poisonous_to_humans?: boolean | null, poisonous_to_pets?: boolean | null, description?: string | null } | null };


export const PlantsBasicInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PlantsBasicInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"inputNumber"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"inputString"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"plantsBasicInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"inputNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"inputNumber"}}},{"kind":"Argument","name":{"kind":"Name","value":"inputString"},"value":{"kind":"Variable","name":{"kind":"Name","value":"inputString"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"common_name"}},{"kind":"Field","name":{"kind":"Name","value":"default_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}}]}},{"kind":"Field","name":{"kind":"Name","value":"watering"}}]}}]}}]} as unknown as DocumentNode<PlantsBasicInfoQuery, PlantsBasicInfoQueryVariables>;
export const PlantsMoreInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PlantsMoreInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"plantsMoreInfoId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"plantsMoreInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"plantsMoreInfoId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"common_name"}},{"kind":"Field","name":{"kind":"Name","value":"scientific_name"}},{"kind":"Field","name":{"kind":"Name","value":"other_name"}},{"kind":"Field","name":{"kind":"Name","value":"family"}},{"kind":"Field","name":{"kind":"Name","value":"origin"}},{"kind":"Field","name":{"kind":"Name","value":"dimension"}},{"kind":"Field","name":{"kind":"Name","value":"cycle"}},{"kind":"Field","name":{"kind":"Name","value":"propagation"}},{"kind":"Field","name":{"kind":"Name","value":"sunlight"}},{"kind":"Field","name":{"kind":"Name","value":"pruning_month"}},{"kind":"Field","name":{"kind":"Name","value":"maintenance"}},{"kind":"Field","name":{"kind":"Name","value":"care_guides"}},{"kind":"Field","name":{"kind":"Name","value":"growth_rate"}},{"kind":"Field","name":{"kind":"Name","value":"thorny"}},{"kind":"Field","name":{"kind":"Name","value":"invasive"}},{"kind":"Field","name":{"kind":"Name","value":"care_level"}},{"kind":"Field","name":{"kind":"Name","value":"flowers"}},{"kind":"Field","name":{"kind":"Name","value":"flower_color"}},{"kind":"Field","name":{"kind":"Name","value":"cones"}},{"kind":"Field","name":{"kind":"Name","value":"fruits"}},{"kind":"Field","name":{"kind":"Name","value":"edible_fruit"}},{"kind":"Field","name":{"kind":"Name","value":"fruit_color"}},{"kind":"Field","name":{"kind":"Name","value":"harvest_season"}},{"kind":"Field","name":{"kind":"Name","value":"leaf"}},{"kind":"Field","name":{"kind":"Name","value":"leaf_color"}},{"kind":"Field","name":{"kind":"Name","value":"edible_leaf"}},{"kind":"Field","name":{"kind":"Name","value":"cuisine"}},{"kind":"Field","name":{"kind":"Name","value":"medicinal"}},{"kind":"Field","name":{"kind":"Name","value":"poisonous_to_humans"}},{"kind":"Field","name":{"kind":"Name","value":"poisonous_to_pets"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<PlantsMoreInfoQuery, PlantsMoreInfoQueryVariables>;