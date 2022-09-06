/** @type {import('next').NextConfig} */

// Use .env file...
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, ".env") });

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    POKE_TCG_DB_API: process.env.POKE_TCG_DB_API,
    POKE_TCG_DB_API_LOCAL: process.env.POKE_TCG_DB_API_LOCAL,
  },
};

module.exports = nextConfig;
