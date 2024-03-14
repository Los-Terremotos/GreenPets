import { RESTDataSource, AugmentedRequest } from "@apollo/datasource-rest";
import { KeyValueCache } from "@apollo/utils.keyvaluecache";
import { PlantListModel, PlantDetailsModel } from "../models";
import { PLANT_API } from "../config";
import processParams from "../utils/processParams";
import client from "../services/redis";
import { response } from "express";

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
    const cacheKey = `plantsBasicInfo:${inputNumber}:${inputString}`;

    // check if data for this key is in Redis
    const cachedData = await client.get(cacheKey);
    if (cachedData) {
      console.log('Returning from cache (Plants Basic Info Query)')
      return JSON.parse(cachedData);
    }

    try {
      // Process the parameters first
      const { wateringParam, indoorParam } = processParams(
        inputNumber,
        inputString
      );

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
        method: "GET",
        headers: {
          Authorization: this.token,
        },
      });

      if (!response.ok) {
        console.error(`Response Status: ${response.status}`);
      }
      // Parse the response body as JSON
      const responseBody = await response.json();
      //console.log("API Response Body:", responseBody);

      // store response in Redis cache
      await client.set(cacheKey, JSON.stringify(responseBody.data), {
        EX: 3600,
      });

      return responseBody.data;
    } catch (error: any) {
      console.error("Error in getPlantsBasicInfo:", error);
      throw error;
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
    const cacheKey = `plantsMoreInfo:${id}`;

    // check if data for this key is in Redis
    const cachedData = await client.get(cacheKey);
    if (cachedData) {
      console.log('Returning from cache (Plant Details Query)')
      return JSON.parse(cachedData);
    }
    try {
      const response = await this.get<PlantDetailsModel[]>(
        `${id}?key=${PLANT_API}`
      );

      // store response in Redis cache
      await client.set(cacheKey, JSON.stringify(response), {
        EX: 3600,
      });
      return response;
    } catch (error) {
      console.error("Error in getPlantsMoreInfo:", error);
      throw error;
    }
  }
}
