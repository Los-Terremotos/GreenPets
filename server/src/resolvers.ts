import type { Resolvers } from "./types";

const resolvers: Resolvers = {
  Query: {
    plantsBasicInfo: (_, { inputNumber, inputString }, { dataSources }) => {
      return dataSources.plantBasic.getPlantsBasicInfo(
        inputNumber,
        inputString
      );
    },

    plantsMoreInfo: async (_, { id }, { dataSources }) => {
      const plantDetails = await dataSources.plantExpanded.getPlantsMoreInfo(parseInt(id));

      if (plantDetails && plantDetails['care-guides']) {
        plantDetails.care_guides = plantDetails['care-guides'];
        delete plantDetails['care-guides']
      }
      return plantDetails;
    },
  },
};

export default resolvers;
