import db from "../../dbConfig.js";

function getAllTypes() {
  try {
    const query = "SELECT * FROM type";
    return db.query(query);
  } catch (err) {
    console.log(err);
    throw err;
  }
}

function getCardTypesById(id) {
  try {
    const query = `
      SELECT * FROM card_type
      LEFT JOIN type
      ON card_type.type_id = type.type_id
      WHERE card_id = $1
    `;
    const params = [id];
    return db.query(query, params);
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export default { getAllTypes, getCardTypesById };
