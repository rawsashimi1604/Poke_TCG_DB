import db from "../../dbConfig.js";

function getAllPokedexCards() {
  try {
    const query = "SELECT * FROM pokedex_card";
    return db.query(query);
  } catch (err) {
    console.log(err);
    throw err;
  }
}

function getPokedexByCardId(id) {
  try {
    const query = `
      SELECT * FROM pokedex_card
      WHERE card_id = $1
    `;
    const params = [id];
    return db.query(query, params);
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export default { getAllPokedexCards, getPokedexByCardId };
