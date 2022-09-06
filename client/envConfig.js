import dotenv from "dotenv"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../.env") });

export default {
  API_URL: process.env.NODE_ENV === "production" ? process.env.POKE_TCG_DB_API : process.env.POKE_TCG_DB_API_LOCAL
}