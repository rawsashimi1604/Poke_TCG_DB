import express from "express";
import TypeController from "../controller/type.js";

const router = express.Router();

// Middleware that is specific to Set Router..
router.use((req, res, next) => {
  next();
});

// Routes
router.get("/", TypeController.handleIndex);
router.get("/all", TypeController.handleAllTypes);

export default router;
