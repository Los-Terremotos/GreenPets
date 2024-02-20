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

export type PlantsBasicInfoQueryVariables = Exact<{
  inputNumber: Scalars['Int']['input'];
  inputString: Scalars['String']['input'];
}>;


export type PlantsBasicInfoQuery = { __typename?: 'Query', plantsBasicInfo?: Array<{ __typename?: 'PlantList', id: string, common_name?: string | null, watering?: string | null, default_image?: { __typename?: 'ImageUrl', thumbnail?: string | null } | null } | null> | null };

export type PlantsMoreInfoQueryVariables = Exact<{
  plantsMoreInfoId: Scalars['String']['input'];
}>;


export type PlantsMoreInfoQuery = { __typename?: 'Query', plantsMoreInfo?: { __typename?: 'PlantDetails', id: string, scientific_name?: Array<string | null> | null, sunlight?: Array<string | null> | null, watering?: string | null, poisonous_to_pets?: boolean | null, indoor?: boolean | null, care_level?: string | null, description?: string | null } | null };


export const PlantsBasicInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PlantsBasicInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"inputNumber"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"inputString"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"plantsBasicInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"inputNumber"},"value":{"kind":"Variable","name":{"kind":"Name","value":"inputNumber"}}},{"kind":"Argument","name":{"kind":"Name","value":"inputString"},"value":{"kind":"Variable","name":{"kind":"Name","value":"inputString"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"common_name"}},{"kind":"Field","name":{"kind":"Name","value":"default_image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"thumbnail"}}]}},{"kind":"Field","name":{"kind":"Name","value":"watering"}}]}}]}}]} as unknown as DocumentNode<PlantsBasicInfoQuery, PlantsBasicInfoQueryVariables>;
export const PlantsMoreInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"PlantsMoreInfo"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"plantsMoreInfoId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"plantsMoreInfo"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"plantsMoreInfoId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"scientific_name"}},{"kind":"Field","name":{"kind":"Name","value":"sunlight"}},{"kind":"Field","name":{"kind":"Name","value":"watering"}},{"kind":"Field","name":{"kind":"Name","value":"poisonous_to_pets"}},{"kind":"Field","name":{"kind":"Name","value":"indoor"}},{"kind":"Field","name":{"kind":"Name","value":"care_level"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<PlantsMoreInfoQuery, PlantsMoreInfoQueryVariables>;