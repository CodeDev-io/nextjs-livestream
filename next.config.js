/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // Forces Next.js to produce static HTML/CSS/JS
  images: {
    unoptimized: true, // Required for 'export' since Next's Image Optimization needs a server
  },
    experimental: {
    optimizePackageImports: ["@radix-ui/react-icons"],
  },
};

module.exports = nextConfig;
