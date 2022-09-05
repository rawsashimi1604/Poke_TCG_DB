import express from "express";
import RarityController from "../controller/rarity.js";

const router = express.Router();

// Middleware that is specific to Rarity Router..
router.use((req, res, next) => {
  next();
});

// Routes
router.get("/", RarityController.handleIndex);
router.get("/all", RarityController.handleAllRarities);

export default router;
