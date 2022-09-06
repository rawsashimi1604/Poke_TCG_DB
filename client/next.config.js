/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    POKE_TCG_DB_API: "https://poke-tcg-db.herokuapp.com",
    POKE_TCG_DB_API_LOCAL: "http://localhost:3000",
  },
};

module.exports = nextConfig;
