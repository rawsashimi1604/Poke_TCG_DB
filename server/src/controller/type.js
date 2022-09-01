import { TypeQuery } from "../db/queries/index.js";

function handleIndex(req, res) {
  res.send("Type route...");
} 

function handleAllTypes(req, res) {
  const queryRes = await TypeQuery.getAllTypes();
  res.send(queryRes.rows);
}

export default {
  handleIndex,
  handleAllTypes
}