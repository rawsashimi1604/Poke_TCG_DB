import db from "../../dbConfig.js";

function getAllSupertypes() {
  try {
    const query = "SELECT * FROM supertype";
    return db.query(query);
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export default { getAllSupertypes };
