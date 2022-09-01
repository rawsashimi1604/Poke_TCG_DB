import express from "express";
import CardController from "../controller/card.js";
import { CardQuery } from "../db/queries/index.js";

const router = express.Router();

// Middleware that is specific to Card Router..
router.use((req, res, next) => {
  next();
});

// Routes
router.get("/", CardController.handleIndex);
router.get("/all", CardController.handleAllCards);
router.get("/count", CardController.handleCardCount);
router.get("/:cardId", CardController.handleSpecificCardByCardId);
router.get("/set/:set", CardController.handleAllCardsFromSetId);

export default router;
