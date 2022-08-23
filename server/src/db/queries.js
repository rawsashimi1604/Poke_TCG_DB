import envConfig from "../envConfig.js";
import pg from "pg";

const pool = new pg.Pool({
  user: "loowe",
  host: "localhost",
  database: "poke_tcg_db",
  password: envConfig.DB_PASSWORD,
  port: 5432,
});

const addToTest = () => {
  pool.query(
    `INSERT INTO test (name) VALUES ($1)`,
    ["Charizard"],
    (err, results) => {
      if (err) throw err;
    }
  );
};

addToTest();
