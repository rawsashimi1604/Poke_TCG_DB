import db from "../../dbConfig.js";

function getAllSetLegalities() {
  try {
    const query = "SELECT * FROM legality";
    return db.query(query);
  } catch (err) {
    console.log(err);
  }
}

export default { getAllSetLegalities };
