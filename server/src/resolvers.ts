import type { Resolvers } from "./types";

const resolvers: Resolvers = {
  Query: {
    plantsBasicInfo: (_, { inputNumber, inputString }, { dataSources }) => {
      return dataSources.plantBasic.getPlantsBasicInfo(
        inputNumber,
        inputString
      );
    },

    plantsMoreInfo: (_, { id }, { dataSources }) => {
      return dataSources.plantExpanded.getPlantsMoreInfo(parseInt(id));
    },
  },
};

export default resolvers;
