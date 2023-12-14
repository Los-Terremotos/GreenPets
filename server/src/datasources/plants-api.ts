import { RESTDataSource, AugmentedRequest } from "@apollo/datasource-rest";
import { KeyValueCache } from "@apollo/utils.keyvaluecache";
import { PlantListModel, PlantDetailsModel } from "../models";
import { PLANT_API } from "../config";
import processParams from "../utils/processParams";


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
      // Process the parameters first
      const { wateringParam, indoorParam } = processParams(inputNumber, inputString);
  
      // Start constructing the URL with the base URL
      let requestUrl = this.baseURL;
  
      if (indoorParam !== null) {
        requestUrl += `&indoor=${encodeURIComponent(indoorParam)}`;
      }
      if (wateringParam !== null) {
        requestUrl += `&watering=${encodeURIComponent(wateringParam)}`;
      }
  
      // Perform the fetch request
      const response = await fetch(requestUrl, {
        method: 'GET',
        headers: {
          'Authorization': this.token, 
        }
      });
      
      if (!response.ok) {
        console.error(`Response Status: ${response.status}`);
      }
      // Parse the response body as JSON
      const responseBody = await response.json();
      //console.log("API Response Body:", responseBody);
      
      return responseBody.data;
      
    } catch (error: any) {
      console.error("Error in getPlantsBasicInfo:", error);
    }
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

  async getPlantsMoreInfo(id: number) {

    const response = await this.get<PlantDetailsModel[]>(`${id}?key=${PLANT_API}`)

    //console.log("RESPONSE:", JSON.stringify(response, null, 2));
    //console.log(`Response type: ${typeof response}`);
    return response;
  }
}
