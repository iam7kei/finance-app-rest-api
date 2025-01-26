import routes from "./api/routes.js"
import express from "express"
const app = express();
const port = 3000;

app.use("/", routes);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
