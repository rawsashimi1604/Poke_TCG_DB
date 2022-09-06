import pg from "pg";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config();

const devConfig = {
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
  max: 20,
};

const proConfig = {
  connectionString: process.env.DATABASE_URL, // Heroku addons
  ssl: {
    rejectUnauthorized: false,
  },
};

export default new pg.Pool(
  process.env.NODE_ENV === "production" ? proConfig : devConfig
);
