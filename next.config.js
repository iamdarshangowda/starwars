/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    STARWARS_BACKEND_PORT: process.env.STARWARS_BACKEND_PORT,
  },
  images: {
    domains: ["picsum.photos"],
  },
};

module.exports = nextConfig;
