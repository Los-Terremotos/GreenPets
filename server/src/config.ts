import dotenv from 'dotenv';
dotenv.config();

export const PLANT_API = process.env.PLANT_API;
export const DB_URI = process.env.DB_URI;
export const REDIS_USERNAME = process.env.REDIS_USERNAME;
export const REDIS_PASSWORD = process.env.REDIS_PASSWORD;
export const REDIS_ENDPOINT = process.env.REDIS_ENDPOINT;

