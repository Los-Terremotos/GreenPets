/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n  query PlantsBasicInfo($inputNumber: Int!, $inputString: String!) {\n    plantsBasicInfo(inputNumber: $inputNumber, inputString: $inputString) {\n      id\n      common_name\n      default_image {\n        thumbnail\n      }\n      watering\n    }\n  }\n": types.PlantsBasicInfoDocument,
    "\n  query PlantsMoreInfo($plantsMoreInfoId: String!) {\n    plantsMoreInfo(id: $plantsMoreInfoId) {\n      id\n      common_name\n      scientific_name\n      other_name\n      family\n      origin\n      dimension\n      cycle\n      propagation\n      sunlight\n      pruning_month\n      maintenance\n      care_guides\n      growth_rate\n      thorny\n      invasive\n      care_level\n      flowers\n      flower_color\n      cones\n      fruits\n      edible_fruit\n      fruit_color\n      harvest_season\n      leaf\n      leaf_color\n      edible_leaf\n      cuisine\n      medicinal\n      poisonous_to_humans\n      poisonous_to_pets\n      description\n    }\n  }\n": types.PlantsMoreInfoDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query PlantsBasicInfo($inputNumber: Int!, $inputString: String!) {\n    plantsBasicInfo(inputNumber: $inputNumber, inputString: $inputString) {\n      id\n      common_name\n      default_image {\n        thumbnail\n      }\n      watering\n    }\n  }\n"): (typeof documents)["\n  query PlantsBasicInfo($inputNumber: Int!, $inputString: String!) {\n    plantsBasicInfo(inputNumber: $inputNumber, inputString: $inputString) {\n      id\n      common_name\n      default_image {\n        thumbnail\n      }\n      watering\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query PlantsMoreInfo($plantsMoreInfoId: String!) {\n    plantsMoreInfo(id: $plantsMoreInfoId) {\n      id\n      common_name\n      scientific_name\n      other_name\n      family\n      origin\n      dimension\n      cycle\n      propagation\n      sunlight\n      pruning_month\n      maintenance\n      care_guides\n      growth_rate\n      thorny\n      invasive\n      care_level\n      flowers\n      flower_color\n      cones\n      fruits\n      edible_fruit\n      fruit_color\n      harvest_season\n      leaf\n      leaf_color\n      edible_leaf\n      cuisine\n      medicinal\n      poisonous_to_humans\n      poisonous_to_pets\n      description\n    }\n  }\n"): (typeof documents)["\n  query PlantsMoreInfo($plantsMoreInfoId: String!) {\n    plantsMoreInfo(id: $plantsMoreInfoId) {\n      id\n      common_name\n      scientific_name\n      other_name\n      family\n      origin\n      dimension\n      cycle\n      propagation\n      sunlight\n      pruning_month\n      maintenance\n      care_guides\n      growth_rate\n      thorny\n      invasive\n      care_level\n      flowers\n      flower_color\n      cones\n      fruits\n      edible_fruit\n      fruit_color\n      harvest_season\n      leaf\n      leaf_color\n      edible_leaf\n      cuisine\n      medicinal\n      poisonous_to_humans\n      poisonous_to_pets\n      description\n    }\n  }\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;