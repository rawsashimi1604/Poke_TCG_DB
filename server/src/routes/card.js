import express from "express";
import { CardQuery } from "../db/queries/index.js";

const router = express.Router();

// Middleware that is specific to Card Router..
router.use((req, res, next) => {
  console.log("Card route was triggered.");
  next();
});

// Routes
router.get("/", (req, res) => {
  res.send("Card route...");
});

router.get("/all", async (req, res) => {
  const queryRes = await CardQuery.getAllCards();
  res.send(queryRes.rows);
});

export default router;
