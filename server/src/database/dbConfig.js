"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.query = void 0;
const config_1 = require("../config");
const { Pool } = require("pg");
const pool = new Pool({
  connectionString: config_1.DB_URI,
});
const query = (text, params, callback) => {
  console.log("Executed query:", text);
  return pool.query(text, params, callback);
};
exports.query = query;
