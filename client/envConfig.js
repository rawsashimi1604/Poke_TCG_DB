import dotenv from "dotenv";

export default {
  API_URL:
    process.env.NODE_ENV === "production"
      ? process.env.POKE_TCG_DB_API
      : process.env.POKE_TCG_DB_API_LOCAL,
};
