import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const devConfig = {
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
};

const proConfig = {
  connectionString: process.env.DATABASE_URL, // Heroku addons
};

export default new pg.Pool(
  process.env.NODE_ENV === "production" ? proConfig : devConfig
);
