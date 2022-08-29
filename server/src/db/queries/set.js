import db from "../../dbConfig.js";

function getAllSets() {
  try {
    const query = "SELECT * FROM card_set";
    return db.query(query);
  } catch (err) {
    console.log(err);
  }
}

export default { getAllSets };
