/** @type {import('next').NextConfig} */
require("dotenv").config()


const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    POKE_TCG_DB_API: process.env.POKE_TCG_DB_API,
    POKE_TCG_DB_API_LOCAL: process.env.POKE_TCG_DB_API_LOCAL,
  },
};

module.exports = nextConfig;
