import db from "../../dbConfig.js";

function getAllSetLegalities() {
  try {
    const query = "SELECT * FROM legality";
    return db.query(query);
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export default { getAllSetLegalities };
