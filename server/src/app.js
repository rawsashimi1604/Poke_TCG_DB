import express from "express";
import morgan from "morgan";
import cors from "cors";
import pokemon from "pokemontcgsdk";

import cardRouter from "./routes/card.js";
import setRouter from "./routes/set.js";
import typeRouter from "./routes/type.js";

import ErrorMiddleware from "./middleware/error.js";

const app = express();
const PORT = 3000;

// Enable logging of request hits
app.use(morgan("combined"));

// Enable CORS
const corsOptions = {
  origin: "http://localhost:5000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

// Routes
app.use("/api/cards", cardRouter);
app.use("/api/sets", setRouter);
app.use("/api/types", typeRouter);

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
