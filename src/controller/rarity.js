import { RarityQuery } from "../db/queries/index.js";

function handleIndex(req, res) {
  res.send("Rarity route...");
}

async function handleAllRarities(req, res) {
  const queryRes = await RarityQuery.getAllRarities();
  res.send(queryRes.rows);
}

export default {
  handleIndex,
  handleAllRarities,
};
