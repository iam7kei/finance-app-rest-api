import routes from "./api/routes.js"
import express from "express"
import db from "./utils/db.js";
import "dotenv/config";
const app = express();
const port = 3000;

const result = await db.query("SELECT NOW()")

app.use("/", routes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
