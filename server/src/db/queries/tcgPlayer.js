import db from "../../dbConfig.js";

function getAllTCGPlayerPrices() {
  try {
    const query = "SELECT * FROM tcg_player";
    return db.query(query);
  } catch (err) {
    console.log(err);
  }
}

export default { getAllTCGPlayerPrices };
