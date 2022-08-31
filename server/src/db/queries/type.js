import db from "../../dbConfig.js";

function getAllTypes() {
  try {
    const query = "SELECT * FROM type";
    return db.query(query);
  } catch (err) {
    console.log(err);
  }
}

function getAllCardsByType() {}

export default { getAllTypes };
