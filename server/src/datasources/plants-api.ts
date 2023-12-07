import { RESTDataSource, AugmentedRequest } from "@apollo/datasource-rest";
import { KeyValueCache } from "@apollo/utils.keyvaluecache";
import { PlantListModel, PlantDetailsModel } from "../models";
import { PLANT_API } from "../config";
import { processParams } from "../utils/processParams";

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
    const { wateringParam, indoorParam } = processParams(
      inputNumber,
      inputString
    );
    return this.get<PlantListModel[]>(
      `&watering=${wateringParam}&indoor=${indoorParam}`
    );
  }
}

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

  async getPlantsList(id: String) {
    return this.get<PlantDetailsModel[]>(`${id}?key=${PLANT_API}`);
  }
}

// COMMENTED THIS OUT BECAUSE CURRENTLY UNSURE IF WE WILL USE GRAPHQL FOR THE DB
// export class UserInfoAPI extends RESTDataSource {

//   // getUser route

//   // getFavoritePlants route

//   // getUserLocation route
// }
