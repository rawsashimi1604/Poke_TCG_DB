import express from "express";
import CardController from "../controller/card.js";
import asyncErrorHandler from "../lib/asyncErrorHandler.js";

const router = express.Router();

// Middleware that is specific to Card Router..
router.use((req, res, next) => {
  next();
});

// Routes
router.get("/", CardController.handleIndex);
router.get("/all", asyncErrorHandler(CardController.handleAllCards));
router.get("/count", asyncErrorHandler(CardController.handleCardCount));
router.get("/search", asyncErrorHandler(CardController.handleCardSearch));
router.get(
  "/:cardId",
  asyncErrorHandler(CardController.handleSpecificCardByCardId)
);
router.get(
  "/set/:set",
  asyncErrorHandler(CardController.handleAllCardsFromSetId)
);
router.get(
  "/type/:type",
  asyncErrorHandler(CardController.handleAllCardsByType)
);

export default router;
