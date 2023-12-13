import type { Resolvers } from './types';
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

// log for plants basic info
//console.log(`Data sources: ${JSON.stringify(dataSources)}`);

//return `Hello, inside plants MoreInfo, id: ${id}, dataSources: ${dataSources}, dataSources.plantExpanded: ${dataSources.plantExpanded}`;