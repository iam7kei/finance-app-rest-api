import express from "express";
import knexClient from "../utils/knex.js";

const bankRoutes = express.Router();

bankRoutes.get("/list", async (req, res) => {
  try {
    const result = await knexClient.select("*").from("banks")
    res.status(200).send(result)
  } catch (e) {
    console.error(e)
  }
});

bankRoutes.post("/add", async (req, res) => {
  const validTypes = ["SAVINGS", "CHECKING"]
  try {
    const { name, type, amount } = req.body
   if (!validTypes.includes(type)) {
     throw new Error(`Invalid type: ${type}.`);
   }
    const result = await knexClient('banks').insert({ name, type, amount: parseFloat(amount) }).returning('*')

    res.status(200).send(result);
  } catch (e) {
    console.error(e)
    
   res.status(400).send({
     message: e.message,
   });
  }
});

export default bankRoutes;