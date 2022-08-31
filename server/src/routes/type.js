import express from "express";
import { TypeQuery } from "../db/queries/index.js";

const router = express.Router();

// Middleware that is specific to Set Router..
router.use((req, res, next) => {
  next();
});

// Routes
router.get("/", (req, res) => {
  res.send("Type route...");
});

// Get all types...
router.get("/all", async (req, res) => {
  const queryRes = await TypeQuery.getAllTypes();
  res.send(queryRes.rows);
});

export default router;
