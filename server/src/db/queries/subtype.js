import db from "../../dbConfig.js";

function getAllSubtypes() {
  try {
    const query = "SELECT * FROM subtype";
    return db.query(query);
  } catch (err) {
    console.log(err);
  }
}

export default { getAllSubtypes };
