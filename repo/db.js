require('dotenv').config();

const { Pool, Client } = require("pg");

const connectionString = process.env.DATABASE_URL;
const pool = new Pool({
  connectionString, 
});

async function connect() {
  try {
    const results = await pool.query("SELECT NOW()");
    return results.rows[0].now;
  } catch (err) {
    console.error("error executing query:", err);
  }
}

async function runQuery(query) {
  try {
    const results = await pool.query(query);
    return results.rows;
  } catch (err) {
    console.error("error executing query:", err);
  } 
}


module.exports = {
    connect,
    runQuery,
};