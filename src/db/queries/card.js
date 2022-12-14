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
    throw err;
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
    throw err;
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
    throw err;
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
    throw err;
  }
}

function getAllCardsByType(type, qty) {
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
    JOIN card_type ON card.card_id = card_type.card_id 
    JOIN type ON card_type.type_id = type.type_id
    WHERE type.type = $1
    LIMIT $2 
    `;
    const params = [type, qty];
    return db.query(query, params);
  } catch (err) {
    console.log(err);
    throw err;
  }
}

function getAllCardsBySearch(queryObj) {
  try {
    const whitelist = [
      "card_name",
      "set_id",
      "type_id",
      "supertype_id",
      "rarity_id",
    ];

    // Array to contain WHERE conditions for SQL querying...
    let where = [];
    const params = [];
    let count = 1;

    Object.keys(queryObj).forEach((key) => {
      // If key is not whitelisted, do not use
      if (!whitelist.includes(key)) return;

      // If key is an empty string, do not use
      if ("" === queryObj[key]) return;

      // Add to WHERE based on foreign key/key
      if (key === "card_name") {
        where.push(`LOWER(${key}) LIKE LOWER($${count})`);
        params.push(`%${queryObj[key]}%`);
      } else if (key === "type_id") {
        where.push(`card_type.${key} = $${count}`);
        params.push(queryObj[key]);
      } else if (key === "supertype_id") {
        where.push(`supertype.${key} = $${count}`);
        params.push(queryObj[key]);
      } else if (key === "rarity_id") {
        where.push(`rarity.${key} = $${count}`);
        params.push(queryObj[key]);
      } else {
        where.push(`${key} = $${count}`);
        params.push(queryObj[key]);
      }

      count++;
    });

    where = where.join(" AND ");
    if (where) where = `WHERE ${where}`;

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
      JOIN card_type ON card.card_id = card_type.card_id 
      JOIN type ON card_type.type_id = type.type_id
      ${where} 
    `;
    return db.query(query, params);
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export default {
  getAllCards,
  getCardQuantity,
  getBySet,
  getById,
  getCardsByQuantity,
  getAllCardsByType,
  getAllCardsBySearch,
};
