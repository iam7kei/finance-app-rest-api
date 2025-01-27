import express from "express";

const bankRoutes = express.Router();

bankRoutes.get("/list", (req, res) => {
  res.status(200).send("success");
});

bankRoutes.post("/add", (req, res) => {
  
  res.status(200).send("success");
});

export default bankRoutes;