import { RESTDataSource, AugmentedRequest } from "@apollo/datasource-rest";
import { KeyValueCache } from "@apollo/utils.keyvaluecache";
import { PlantListModel, PlantDetailsModel } from "../models";
import { PLANT_API } from "../config";
import processParams from "../utils/processParams";


// version 2
export class PlantBasic extends RESTDataSource {
  baseURL = `https://perenual.com/api/species-list?key=${PLANT_API}`;
  
  async getPlantsBasicInfo(inputNumber: number, inputString: string) {

    const { wateringParam, indoorParam } = processParams(inputNumber, inputString);

    // const response = this.get<PlantListModel[]>(
    //   `&indoor=${indoorParam}&watering=${wateringParam}`
    // )
    
    // console.log("RESPONSE:", JSON.stringify(response, null, 2));
    // return response;

    try {
      const response = await this.get<PlantListModel[]>(
        `&watering=${wateringParam}&indoor=${indoorParam}`
      );
      //console.log("API URL:", this.baseURL + `&indoor=${indoorParam}&watering=${wateringParam}`);

      //console.log("RESPONSE:", JSON.stringify(response, null, 2));
      return response;
    } catch (error) {
      console.log(`INSIDE ERROR GET BASIC PLANT`)
      console.error("Error in getPlantsBasicInfo:", error);
      throw error;
    }

  }
}

// original version

// export class PlantBasic extends RESTDataSource {
//   override baseURL = `https://perenual.com/api`;
//   private token: string;

//   constructor(options: { token: string; cache: KeyValueCache }) {
//     super(options);
//     this.token = options.token;
//   }

//   override willSendRequest(path: string, request: AugmentedRequest) {
//     request.headers.authorization = this.token;
//   }
  
//   async getPlantsBasicInfo(inputNumber: number, inputString: string) {
//     try {
//       const { wateringParam, indoorParam } = processParams(
//         inputNumber,
//         inputString
//       );
//       //const query = `&indoor=${indoorParam}&watering=${wateringParam}`;
//       const response = await this.get<PlantListModel[]>(
//         `/species-list?key=${PLANT_API}&indoor=${indoorParam}&watering=${wateringParam}`
//       );
//       return response;
//     } catch (error) {
//       console.error("Error in getPlantsBasicInfo:", error);
//       throw error;
//     }
//   }
// }



export class PlantExpanded extends RESTDataSource {
  baseURL = `https://perenual.com/api/species/details/`;
  
  private token: string;

  constructor(options: { token: string; cache: KeyValueCache }) {
    super(options);
    this.token = options.token;
  }

  override willSendRequest(path: string, request: AugmentedRequest) {
    request.headers.authorization = this.token;
  }

  async getPlantsMoreInfo(id: number) {
    
    return this.get<PlantDetailsModel[]>(`${id}?key=${PLANT_API}`);
  }
}

// Moved code down from up top
// class ContextValue {
//   public token: string;
//   public dataSources: {
//     plantBasic: PlantBasic
//     plantExpanded: PlantExpanded
//   }
// }

// COMMENTED THIS OUT BECAUSE CURRENTLY UNSURE IF WE WILL USE GRAPHQL FOR THE DB
// export class UserInfoAPI extends RESTDataSource {

//   // getUser route

//   // getFavoritePlants route

//   // getUserLocation route
// }
