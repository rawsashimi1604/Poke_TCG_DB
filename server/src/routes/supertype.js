import express from "express";
import SupertypeController from "../controller/supertype.js";

const router = express.Router();

// Middleware that is specific to Supertype Router..
router.use((req, res, next) => {
  next();
});

// Routes
router.get("/", SupertypeController.handleIndex);
router.get("/all", SupertypeController.handleAllSupertypes);

export default router;
