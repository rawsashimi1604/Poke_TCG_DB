import express from "express";
import { SetQuery } from "../db/queries/index.js";

const router = express.Router();

// Middleware that is specific to Set Router..
router.use((req, res, next) => {
  console.log("Set route was triggered.");
  next();
});

// Routes
router.get("/", (req, res) => {
  res.send("Set route...");
});

// Get all card_sets...
router.get("/all", async (req, res) => {
  const queryRes = await SetQuery.getAllSets();
  res.send(queryRes.rows);
});

export default router;
