import express from "express";
import cors from "cors";
import pokemon from "pokemontcgsdk";

import cardRouter from "./routes/card.js";
import setRouter from "./routes/set.js";

const app = express();
const PORT = 3000;

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

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.listen(PORT, (e) => {
  if (e) {
    console.log("Error occured, cannot start server...", e);
  } else {
    console.log("Server has successfully started on port: " + PORT);
  }
});
