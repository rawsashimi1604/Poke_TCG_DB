import envConfig from "../envConfig.js";
import pg from "pg";

export default new pg.Pool({
  user: "loowe",
  host: "localhost",
  database: "poke_tcg_db",
  password: envConfig.DB_PASSWORD,
  port: 5432,
});
