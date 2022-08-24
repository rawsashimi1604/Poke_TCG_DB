import express from "express";
import pokemon from "pokemontcgsdk";
import db from "./db/queries.js";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello world!");
});

app.get("/testadd", async (req, res) => {
  const queryData = await db.addToTest("Charizard");
  console.log(queryData);
  res.send("Successfully added Charizard!");
});

app.get("/testget", async (req, res) => {
  const queryData = await db.getTest();
  console.log(queryData.rows);
  res.send("Get all from TABLE: test");
});

app.get("/getset", async (req, res) => {
  const data = await pokemon.card.all({ q: "set.name:base" });
  console.log("Got data from specific set...");
  res.send(data);
});

app.get("/allset", async (req, res) => {
  const data = await pokemon.set.all();
  res.send(data);
});

app.listen(PORT, (e) => {
  if (e) {
    console.log("Error occured, cannot start server...", e);
  } else {
    console.log("Server has successfully started on port: " + PORT);
  }
});
