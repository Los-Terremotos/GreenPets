import type { Resolvers } from './gql/graphql';
import type { PlantListModel } from './models';

const resolvers: Resolvers = {
  Query: {
    plantsBasicInfo: async (_, { inputNumber, inputString }, { dataSources }) => {
      try {
        const result = await dataSources.plantBasic.getPlantsBasicInfo(inputNumber, inputString);
        console.log(`Inside plantsBasic resolver, result: ${JSON.stringify(result)}`);
        
        return result || [];
      } catch (error) {
        console.error("Error fetching plants basic info: ", error);
        throw new Error("Failed to fetch plants basic info")
      }
    },
    // plantsBasicInfo: async () => {
    //   // Hardcoded response for testing
    //   return [
    //     { id: "1", common_name: "Test Plant", watering: "average", default_image: {thumbnail: "hello"} }, 
    //     { id: "2", common_name: "Test2 Plant", watering: "tons", default_image: {thumbnail: "EWWWWWWWW"} }
    //   ];
    // },
    plantsMoreInfo: (_, { id }, { dataSources }) => {
      return dataSources.plantExpanded.getPlantsMoreInfo(id);
    },
  },
};
    // getPlantList: async (_, { apiKey, params }, { dataSources }) => {
    //   try {
    //     const result = await dataSources.plantList.getPlantList(apiKey, params);

    //     return result;
    //   } catch(error) {
    //     console.error("Error in getPlantList resolver: ", error);
    //     throw new Error("Failed to fetch plant list");
    //   }
    // }

export default resolvers;