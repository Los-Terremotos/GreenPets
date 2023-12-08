import type { Resolvers } from './gql/graphql';
import type { PlantListModel } from './models';

const resolvers: Resolvers = {
  Query: {
    plantsBasicInfo: (_, { inputNumber, inputString }, { dataSources }) => {
      return dataSources.plantBasic.getPlantsBasicInfo(
        inputNumber,
        inputString
      )
      .then((result: PlantListModel[]) => [result])
    },
    plantsMoreInfo: (_, { id }, { dataSources }) => {
      return dataSources.plantExpanded.getPlantsMoreInfo(id);
    },
  },
};

export default resolvers;