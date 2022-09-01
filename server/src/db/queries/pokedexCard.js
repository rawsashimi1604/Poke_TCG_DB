import db from "../../dbConfig.js";

function getAllPokedexCards() {
  try {
    const query = "SELECT * FROM pokedex_card";
    return db.query(query);
  } catch (err) {
    console.log(err);
  }
}

export default { getAllPokedexCards };
