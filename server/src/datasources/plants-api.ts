import { RESTDataSource, AugmentedRequest } from "@apollo/datasource-rest";
import { KeyValueCache } from "@apollo/utils.keyvaluecache";
import { PlantListModel, PlantDetailsModel } from "../models";
import { PLANT_API } from "../config";
import processParams from "../utils/processParams";

// class ContextValue {
//   public token: string;
//   public dataSources: {
//     plantBasic: PlantBasic
//     plantExpanded: PlantExpanded
//   }
// }

export class PlantBasic extends RESTDataSource {
  override baseURL = `https://perenual.com/api/species-list?key=${PLANT_API}`;
  private token: string;

  constructor(options: { token: string; cache: KeyValueCache }) {
    super(options);
    this.token = options.token;
  }

  override willSendRequest(path: string, request: AugmentedRequest) {
    request.headers.authorization = this.token;
  }
  async getPlantsBasicInfo(inputNumber: number, inputString: string) {
        try {
          // const { wateringParam, indoorParam } = processParams(
          //   inputNumber,
          //   inputString
          // );
          // const query = `&indoor=${indoorParam}&watering=${wateringParam}`; // USED FOR CONSOLE LOGS
          
          const response = await this.get<PlantListModel[]>(
            `&indoor=1&watering=average`
          );
          return response;
        } catch (error: any) {
          console.error("Error in getPlantsBasicInfo:", error);
          if(error.response) {
            console.error("Response error details:", error.response)
          }
        }
      }
    }

// New attempt for REST API plant list

// interface PlantListParams {
//   watering: 'frequent' | 'average' | 'minimum' | 'none'
//   indoor: '1' | '0';
// };

// export class PlantListAPI extends RESTDataSource {
//   override baseURL = `https://perenual.com/api/`;

//   async getPlantList(apiKey: string, params: PlantListParams = {
//     watering: "frequent",
//     indoor: '0'
//   }): Promise<PlantListModel[]> {
//     const queryParams = {
//       key: apiKey,
//       ...params,
//     };

//     const data = await this.get('plant-list', { params: queryParams });
//     return data.results;
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

// COMMENTED THIS OUT BECAUSE CURRENTLY UNSURE IF WE WILL USE GRAPHQL FOR THE DB
// export class UserInfoAPI extends RESTDataSource {

//   // getUser route

//   // getFavoritePlants route

//   // getUserLocation route
// }
