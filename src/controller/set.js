import { SetQuery } from "../db/queries/index.js";

function handleIndex(req, res) {
  res.send("Set route...");
}

async function handleAllCardSets(req, res) {
  const queryRes = await SetQuery.getAllSets();
  res.send(await Promise.all(queryRes.rows.map((set) => set.data)));
}

async function handleCardSetCount(req, res) {
  const queryRes = await SetQuery.getSetQuantity();
  res.send(queryRes.rows[0]);
}

async function handleSpecificCardSetBySetId(req, res) {
  const id = req.params.id;
  const queryRes = await SetQuery.getSetById(id);
  res.send(queryRes.rows?.[0].data);
}

export default {
  handleIndex,
  handleAllCardSets,
  handleCardSetCount,
  handleSpecificCardSetBySetId,
};
