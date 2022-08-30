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
  if (req.query.quantity) {
    const qty = req.query.quantity;
    const queryRes = await CardQuery.getCardsByQuantity(qty);
    res.send(queryRes.rows);
  } else {
    const queryRes = await CardQuery.getAllCards();
    res.send(queryRes.rows);
  }
});

// Get specific card
router.get("/:cardId", async (req, res) => {
  const cardId = req.params.cardId;
  const queryRes = await CardQuery.getById(cardId);
  res.send(queryRes.rows);
});

// Get all cards from specific set...
router.get("/set/:set", async (req, res) => {
  const setId = req.params.set;
  const queryRes = await CardQuery.getBySet(setId);
  res.send(queryRes.rows);
});

export default router;
