import { DB_URI } from "../config";

const { Pool } = require("pg");

const pool = new Pool({
  connectionString: DB_URI,
});

export const query = (text: String, params: any[], callback: Function) => {
  console.log("Executed query:", text);
  return pool.query(text, params, callback);
};
