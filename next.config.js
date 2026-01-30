/** @type {import('next').NextConfig} */
const nextConfig = {
   swcMinify: false,
  experimental: {
    optimizePackageImports: ["@radix-ui/react-icons"],
  },
};

module.exports = nextConfig;
