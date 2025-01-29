import routes from "./api/routes.js"
import express from "express"
import db from "./utils/db.js";
import "dotenv/config";
import knexClient from "./utils/knex.js";
import {getTimeNow } from "./services/db.js";
const app = express();
const port = 3000;

getTimeNow();

app.use("/", routes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
