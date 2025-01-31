import "dotenv/config";
import routes from "./api/routes.js"
import express from "express"
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
const port = 3000;

app.use(cors());
app.options("*", cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", routes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
