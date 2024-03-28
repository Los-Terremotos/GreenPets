import * as express from "express";
import axios from 'axios';
import client from "../services/redis";

export const router = express.Router();

// let cachedData: any

// function checkCache () {
//   if (cachedData) {
//   console.log('Data found in apiRouter cache');
//   // return data from cache
//   return JSON.parse(cachedData);
// }}

router.post('/fetch-care-guide', async (req, res) => {
  const { careGuideUrl } = req.body;
  console.log(`Hello inside apiRouter, LiNe 8!!!`)

  try {
    // if data is not found in cache, fetch from API
    const { data } = await axios.get(careGuideUrl);

    // implement cache check
    //cachedData = await client.get(data);

    // await client.set(data, JSON.stringify(data), {
    //   EX: 3600,
    // });

    res.json(data);
  } catch(error) {
    console.error(`Failed to fetch care guide. Inside apiRouter, line 14: `, error);
    res.status(500).json({ error: `Failed to fetch care guide`})
  }
});