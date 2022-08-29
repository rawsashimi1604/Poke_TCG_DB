import express from "express";
import pokemon from "pokemontcgsdk";

import cardRouter from "./routes/card.js";

const app = express();
const PORT = 3000;

app.use("/api/cards", cardRouter);

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
