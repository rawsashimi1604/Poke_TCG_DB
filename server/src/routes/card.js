import express from "express";
import CardController from "../controller/card.js";

const router = express.Router();

// Middleware that is specific to Card Router..
router.use((req, res, next) => {
  next();
});

// Routes
router.get("/", CardController.handleIndex);
router.get("/all", CardController.handleAllCards);
router.get("/count", CardController.handleCardCount);
router.get("/search", CardController.handleCardSearch);
router.get("/:cardId", CardController.handleSpecificCardByCardId);
router.get("/set/:set", CardController.handleAllCardsFromSetId);
router.get("/type/:type", CardController.handleAllCardsByType);

export default router;
