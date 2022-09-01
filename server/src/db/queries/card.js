import db from "../../dbConfig.js";

function getAllCards() {
  try {
    const query = `
      SELECT json_build_object(
        'card_id', card.card_id,
        'card_name', card.card_name,
        'number', card.number,
        'set_id', card.set_id,
        'supertype', supertype.supertype,
        'artist', card.artist,
        'hp', card.hp,
        'rarity', rarity.rarity,
        'flavor_text', card.flavor_text,
        'images', json_build_object(
          'small_img', card.small_img,
          'large_img', card.large_img
        )
      )
      AS data
      FROM card
      LEFT JOIN supertype ON card.supertype_id = supertype.supertype_id 
      LEFT JOIN rarity ON card.rarity_id = rarity.rarity_id 
    `;
    return db.query(query);
  } catch (err) {
    console.log(err);
  }
}

function getCardQuantity() {
  try {
    const query = `SELECT COUNT(*) FROM card`;
    return db.query(query);
  } catch (err) {
    console.log(err);
  }
}

function getCardsByQuantity(quantity) {
  try {
    const query = `
      SELECT json_build_object(
        'card_id', card.card_id,
        'card_name', card.card_name,
        'number', card.number,
        'set_id', card.set_id,
        'supertype', supertype.supertype,
        'artist', card.artist,
        'hp', card.hp,
        'rarity', rarity.rarity,
        'flavor_text', card.flavor_text,
        'images', json_build_object(
          'small_img', card.small_img,
          'large_img', card.large_img
        )
      )
      AS data
      FROM card
      LEFT JOIN supertype ON card.supertype_id = supertype.supertype_id 
      LEFT JOIN rarity ON card.rarity_id = rarity.rarity_id
      WHERE set_id = 'pgo'
      LIMIT $1
    `;
    const param = [quantity];
    return db.query(query, param);
  } catch (err) {
    console.log(err);
  }
}

function getBySet(set) {
  try {
    const query = `
      SELECT json_build_object(
        'card_id', card.card_id,
        'card_name', card.card_name,
        'number', card.number,
        'set_id', card.set_id,
        'supertype', supertype.supertype,
        'artist', card.artist,
        'hp', card.hp,
        'rarity', rarity.rarity,
        'flavor_text', card.flavor_text,
        'images', json_build_object(
          'small_img', card.small_img,
          'large_img', card.large_img
        )
      )
      AS data
      FROM card
      LEFT JOIN supertype ON card.supertype_id = supertype.supertype_id 
      LEFT JOIN rarity ON card.rarity_id = rarity.rarity_id
      WHERE card.set_id = $1
    `;
    const params = [set];
    return db.query(query, params);
  } catch (err) {
    console.log(err);
  }
}

function getById(id) {
  try {
    const query = `
      SELECT json_build_object(
        'card_id', card.card_id,
        'card_name', card.card_name,
        'number', card.number,
        'set_id', card.set_id,
        'supertype', supertype.supertype,
        'artist', card.artist,
        'hp', card.hp,
        'rarity', rarity.rarity,
        'flavor_text', card.flavor_text,
        'images', json_build_object(
          'small_img', card.small_img,
          'large_img', card.large_img
        )
      )
      AS data
      FROM card
      LEFT JOIN supertype ON card.supertype_id = supertype.supertype_id 
      LEFT JOIN rarity ON card.rarity_id = rarity.rarity_id
      WHERE card.card_id = $1
    `;
    const params = [id];
    return db.query(query, params);
  } catch (err) {
    console.log(err);
  }
}

export default {
  getAllCards,
  getCardQuantity,
  getBySet,
  getById,
  getCardsByQuantity,
};
