import { createClient } from "redis";
import { REDIS_USERNAME, REDIS_PASSWORD, REDIS_ENDPOINT } from "../config";

const client = createClient({
  url: `redis://${REDIS_USERNAME}:${REDIS_PASSWORD}@${REDIS_ENDPOINT}`,
});

client.on('error', (err) => {
  console.log('Redis Error:', err);
});

export function connect() {
  return client.connect();
}

export default client;