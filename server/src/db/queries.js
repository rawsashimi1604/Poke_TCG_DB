import envConfig from "../envConfig.js";
import pg from "pg";

const pool = new pg.Pool({
  user: "loowe",
  host: "localhost",
  database: "poke_tcg_db",
  password: envConfig.DB_PASSWORD,
  port: 5432,
});

const addToTest = (name) => {
  return pool.query(
    `INSERT INTO test (name) VALUES ($1)`,
    [name],
    (err, results) => {
      if (err) throw err;
      return results;
    }
  );
};

const getTest = async () => {
  return pool.query("SELECT * FROM test");
};

export default { addToTest, getTest };
