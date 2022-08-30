import db from "../../dbConfig.js";

function getAllSets() {
  try {
    const query = "SELECT * FROM card_set";
    return db.query(query);
  } catch (err) {
    console.log(err);
  }
}

function getSetById(id) {
  try {
    const query = "SELECT * FROM card_set WHERE set_id = $1";
    const params = [id];
    return db.query(query, params);
  } catch (err) {
    console.log(err);
  }
}

export default { getAllSets, getSetById };
