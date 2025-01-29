import knex from "knex";
import "dotenv/config";

const knexClient = knex({
  client: "pg",
  connection: {
    connectionString: process.env.DATABASE_URL,
  },
});

export default knexClient;  