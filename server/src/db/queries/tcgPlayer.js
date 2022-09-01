import db from "../../dbConfig.js";

function getAllTCGPlayerPrices() {
  try {
    const query = "SELECT * FROM tcg_player";
    return db.query(query);
  } catch (err) {
    console.log(err);
  }
}

function getTCGPlayerPriceById(id) {
  try {
    const query = "SELECT * FROM tcg_player WHERE card_id = $1";
    const params = [id];
    return db.query(query, params);
  } catch (err) {
    console.log(err);
  }
}

export default { getAllTCGPlayerPrices, getTCGPlayerPriceById };
