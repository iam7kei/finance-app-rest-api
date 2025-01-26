import express from "express";
import bankRoutes from "./bank.js"

const router = express.Router()

const defaultRoutes = [
  {
    path: "/bank",
    route: bankRoutes,
  },
];

defaultRoutes.forEach((route) => {
  router.use(route.path, route.route); 
});

export default router;
