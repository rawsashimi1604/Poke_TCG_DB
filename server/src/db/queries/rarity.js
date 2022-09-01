import db from "../../dbConfig.js";

function getAllRarities() {
  try {
    const query = "SELECT * FROM rarity";
    return db.query(query);
  } catch (err) {
    console.log(err);
  }
}

export default { getAllRarities };
