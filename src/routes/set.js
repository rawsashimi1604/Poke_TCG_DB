import express from "express";
import SetController from "../controller/set.js";
import asyncErrorHandler from "../lib/asyncErrorHandler.js";

const router = express.Router();

// Middleware that is specific to Set Router..
router.use((req, res, next) => {
  next();
});

// Routes
router.get("/", SetController.handleIndex);
router.get("/all", asyncErrorHandler(SetController.handleAllCardSets));
router.get("/count", asyncErrorHandler(SetController.handleCardSetCount));
router.get(
  "/id/:id",
  asyncErrorHandler(SetController.handleSpecificCardSetBySetId)
);

export default router;
