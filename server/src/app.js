import express from "express";
import pokemon from "pokemontcgsdk";

const app = express();
const PORT = 3000;

app.get("/", async (req, res) => {
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
