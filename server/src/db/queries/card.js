import envConfig from "../../envConfig.js";
import db from "../../dbConfig.js";

function getAllCards() {
  try {
    const query = "SELECT * FROM card";
    return db.query(query);
  } catch (err) {
    console.log(err);
  }
}

function test() {
  console.log("Hello world...");
}

export default { getAllCards, test };
