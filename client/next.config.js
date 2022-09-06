/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    POKE_TCG_DB_API: "http://localhost:3000/",
    POKE_TCG_DB_API_LOCAL: "https://poke-tcg-db.herokuapp.com/",
  },
};

module.exports = nextConfig;
