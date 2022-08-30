import db from "../../dbConfig.js";

function getAllCards() {
  try {
    const query = "SELECT * FROM card";
    return db.query(query);
  } catch (err) {
    console.log(err);
  }
}

function getCardsByQuantity(quantity) {
  try {
    const query = "SELECT * FROM card LIMIT $1";
    const param = [quantity];
    return db.query(query, param);
  } catch (err) {
    console.log(err);
  }
}

function getBySet(set) {
  try {
    const query = "SELECT * FROM card WHERE set_id = $1";
    const params = [set];
    return db.query(query, params);
  } catch (err) {
    console.log(err);
  }
}

function getById(id) {
  try {
    const query = "SELECT * FROM card WHERE card_id = $1";
    const params = [id];
    return db.query(query, params);
  } catch (err) {
    console.log(err);
  }
}

export default { getAllCards, getBySet, getById, getCardsByQuantity };
