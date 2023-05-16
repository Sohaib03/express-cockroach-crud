require('dotenv').config();

const { Client } = require("pg");
const client = new Client(process.env.DATABASE_URL);

async function connect() {
  await client.connect();
  try {
    const results = await client.query("SELECT NOW()");
    return results.rows[0].now;
  } catch (err) {
    console.error("error executing query:", err);
  } finally {
    client.end();
  }
}

module.exports = {
    connect,
};