import { Resolvers } from './gql/graphql';

export const resolvers: Resolvers = {
  Query: {
    plantsBasicInfo: (_, { inputNumber, inputString }, { dataSources }) => {
      return dataSources.plantBasic.getPlantsBasicInfo(
        inputNumber,
        inputString
      );
    },
    plantsList: (_, { id }, { dataSources }) => {
      return dataSources.plantExpanded.getPlantsList(id);
    },
  },
};
