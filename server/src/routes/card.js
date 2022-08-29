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

// Get all cards...
router.get("/all", async (req, res) => {
  const queryRes = await CardQuery.getAllCards();
  res.send(queryRes.rows);
});

// Get all cards from specific set...
router.get("/set/:set", async (req, res) => {
  const setId = req.params.set;
  const queryRes = await CardQuery.getBySet(setId);
  res.send(queryRes.rows);
});

router.get("/");

export default router;
