import { SupertypeQuery } from "../db/queries/index.js";

function handleIndex(req, res) {
  res.send("Rarity route...");
}

async function handleAllSupertypes(req, res) {
  const queryRes = await SupertypeQuery.getAllSupertypes();
  res.send(queryRes.rows);
}

export default {
  handleIndex,
  handleAllSupertypes,
};
