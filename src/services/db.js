import knexClient from "../utils/knex.js";

export const getTimeNow = async () => {
  try {
   const res = await knexClient.raw("SELECT NOW()");
   console.log(res.rows);
  } catch (e) {
    console.error(e)
  }
}