import envConfig from "../envConfig.js";
import db from "./dbConfig.js";

const addToTest = (name) => {
  return db.query(
    `INSERT INTO test (name) VALUES ($1)`,
    [name],
    (err, results) => {
      if (err) throw err;
      return results;
    }
  );
};

const getTest = async () => {
  return db.query("SELECT * FROM supertype");
};

export default { addToTest, getTest };
