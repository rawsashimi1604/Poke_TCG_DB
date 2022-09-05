import express from "express";
import SupertypeController from "../controller/supertype.js";
import asyncErrorHandler from "../lib/asyncErrorHandler.js";

const router = express.Router();

// Middleware that is specific to Supertype Router..
router.use((req, res, next) => {
  next();
});

// Routes
router.get("/", SupertypeController.handleIndex);
router.get("/all", asyncErrorHandler(SupertypeController.handleAllSupertypes));

export default router;
