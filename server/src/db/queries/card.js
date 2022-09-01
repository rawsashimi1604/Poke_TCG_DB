import db from "../../dbConfig.js";

function getAllCards() {
  try {
    const query = "SELECT * FROM card";
    return db.query(query);
  } catch (err) {
    console.log(err);
  }
}

function getCardQuantity() {
  try {
    const query = "SELECT COUNT(*) FROM card";
    return db.query(query);
  } catch (err) {
    console.log(err);
  }
}

function getCardsByQuantity(quantity) {
  try {
    const query = "SELECT * FROM card WHERE set_id = 'pgo' LIMIT $1";
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
    const query = `
      SELECT * FROM card 
      INNER JOIN card_type ON card.card_id = card_type.card_id 
      INNER JOIN type ON card_type.type_id = type.type_id
      INNER JOIN supertype ON card.supertype_id = supertype.supertype_id 
      INNER JOIN rarity ON card.rarity_id = rarity.rarity_id 
      WHERE card.card_id = $1
    `;
    const params = [id];
    return db.query(query, params);
  } catch (err) {
    console.log(err);
  }
}

function getTCGPrice(id) {
  try {
    const query = `
      SELECT * FROM tcg_player
      WHERE card_id = $1
    `
    const params = [id];
    return db.query(query, params);
  } catch(err) {
    console.log(err);
  }
}

export default {
  getAllCards,
  getCardQuantity,
  getBySet,
  getById,
  getCardsByQuantity,
  getTCGPrice
};
