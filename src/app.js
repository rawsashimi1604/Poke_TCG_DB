import express from "express";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

import cardRouter from "./routes/card.js";
import setRouter from "./routes/set.js";
import typeRouter from "./routes/type.js";
import rarityRouter from "./routes/rarity.js";
import supertypeRouter from "./routes/supertype.js";

import ErrorMiddleware from "./middleware/error.js";

// Use .env file...
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../.env") });

const app = express();
const PORT = process.env.PORT || 3000;

// Enable logging of request hits
app.use(morgan("combined"));

// Enable CORS
const corsOptions = {
  origin:
    process.env.NODE_ENV === "production"
      ? process.env.NEXT_APP_URL
      : process.env.NEXT_APP_URL_LOCAL,
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

// Routes
app.use("/api/cards", cardRouter);
app.use("/api/sets", setRouter);
app.use("/api/types", typeRouter);
app.use("/api/supertypes", supertypeRouter);
app.use("/api/rarities", rarityRouter);

// Default Route
app.get("/", (req, res) => {
  res.send("Hello world!");
});

//
app.get("*", (req, res) => {
  res.status(404).send("Route not found");
});

// error handling middleware
app.use(ErrorMiddleware.handleError);

app.listen(PORT, (e) => {
  if (e) {
    console.log("Error occured, cannot start server...", e);
  } else {
    console.log("Server has successfully started on port: " + PORT);
  }
});
