import { RESTDataSource } from "@apollo/datasource-rest";
import {
  WeatherModel,
  TempModel,
  PlantModel,
  ImageUrlModel,
  DimensionsModel,
  MeasurementsModel,
  UserInfoModel,
} from "../models.ts";
import { PLANT_API, WEATHER_API } from "../config.ts";

export class WeatherAPI extends RESTDataSource {
  baseURL = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[USER-LOCATION]/[START-DATE]/[END-DATE]?key=${WEATHER_API}`;
  getWeather(location: string, startDate: string) {
    return this.get<WeatherModel>
  }

}
export class PlantsAPI extends RESTDataSource {
  baseURL = `https://perenual.com/api/species/details/{PlantId}?key=${PLANT_API}`


}



  // get user location from FE
  // get current date from FE or BE configured using Date.now ?
  // calculate start date and end date
    // step 1: add 30 days to user's current date
   // create a helper function to create a season string for the user's current date
   // receiving from API: average temp, average percipitation
   // create a helper function that aids in filtration for our plant API-- determining if the user's location is tropical and determining if the area is drought-prone. 
    // can additionally use for filtration the determined season from previous function

export class UserInfoAPI extends RESTDataSource {

  // getUser route

  // getFavoritePlants route

  // getUserLocation route
}
