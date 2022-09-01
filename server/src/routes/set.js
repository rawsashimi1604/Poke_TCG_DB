import express from "express";
import SetController from "../controller/set.js";

const router = express.Router();

// Middleware that is specific to Set Router..
router.use((req, res, next) => {
  next();
});

// Routes
router.get("/", SetController.handleIndex);
router.get("/all", SetController.handleAllCardSets);
router.get("/count", SetController.handleCardSetCount);
router.get("/id/:id", SetController.handleSpecificCardSetBySetId);

export default router;
