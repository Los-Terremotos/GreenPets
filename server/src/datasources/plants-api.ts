import { RESTDataSource } from "@apollo/datasource-rest";
import { PlantListModel, PlantDetailsModel } from "../../models";
import { PLANT_API } from "../config";
import { processParams } from "../utils/processParams";

export class PlantBasic extends RESTDataSource {
  baseURL = `https://perenual.com/api/species-list?key=${PLANT_API}`;

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
