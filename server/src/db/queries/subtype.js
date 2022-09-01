import db from "../../dbConfig.js";

function getAllSubtypes() {
  try {
    const query = "SELECT * FROM subtype";
    return db.query(query);
  } catch (err) {
    console.log(err);
  }
}

function getSubtypesById(id) {
  try {
    const query = "SELECT * FROM subtype WHERE card_id = $1";
    const params = [id];
    return db.query(query, params);
  } catch (err) {
    console.log(err);
  }
}

export default { getAllSubtypes, getSubtypesById };
