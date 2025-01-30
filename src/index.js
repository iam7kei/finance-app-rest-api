import "dotenv/config";
import routes from "./api/routes.js"
import express from "express"
import bodyParser from "body-parser";
import {getTimeNow } from "./services/db.js";
const app = express();
const port = 3000;

getTimeNow();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", routes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
