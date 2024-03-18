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

    // variables to test caching times
    const cacheStartTime = Date.now();
    // check if data for this key is in Redis
    const cachedData = await client.get(cacheKey);
    const cacheEndTime = Date.now();

    if (cachedData) {
      //console.log('Returning from cache (Plants Basic Info Query)')
      console.log(`Plants-api, Line 33. Returning from cache (Plants Basic Info Query) - Cache retrieval time: ${cacheEndTime - cacheStartTime}ms`)
      return JSON.parse(cachedData);
    }

    // Start timing API request
    const requestStartTime = Date.now();

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

      // End timing API request
      const requestEndTime = Date.now();
      console.log(`plants-api, Line 84. API Request Time (Plants Basic Info Query): ${requestEndTime - requestStartTime}ms`)

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

    // Check start of Cache request time
    const cacheStartTime = Date.now();
    // check if data for this key is in Redis
    const cachedData = await client.get(cacheKey);
    // Check end of cache response time
    const cacheEndTime = Date.now();

    if (cachedData) {
      // console.log('Returning from cache (Plant Details Query)')
      console.log(`getPlantsMoreInfo, Line 117: Returning from cache (Plant Details Query) - Cache retrieval time: ${cacheEndTime - cacheStartTime}ms`);
      return JSON.parse(cachedData);
    }

    // Check start of query request time
    const requestStartTime = Date.now();

    try {
      const response = await this.get<PlantDetailsModel[]>(
        `${id}?key=${PLANT_API}`
      );
      
      // Check end of query resquest time
      const requestEndTime = Date.now();
      console.log(`getPlantsMoreInfo, line 131: API Request Time (Plants Detail Query): ${requestEndTime - requestStartTime}ms `);

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
