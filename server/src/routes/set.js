import express from "express";
import { SetQuery } from "../db/queries/index.js";

const router = express.Router();

// Middleware that is specific to Set Router..
router.use((req, res, next) => {
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

// Get number of sets
router.get("/count", async (req, res) => {
  const queryRes = await SetQuery.getSetQuantity();
  res.send(queryRes.rows[0]);
});

// Get specific card_set...
router.get("/id/:id", async (req, res) => {
  const id = req.params.id;
  const queryRes = await SetQuery.getSetById(id);
  res.send(queryRes.rows);
});

export default router;
