import type { NextConfig } from "next";

// For production build (GitHub Pages deployment)
const productionConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  basePath: '/andrenxt',
  assetPrefix: '/andrenxt/',
};

// For local development and testing
const developmentConfig: NextConfig = {
  // Remove static export for development
  images: {
    unoptimized: true,
  },
};

// Use development config for local testing, production config otherwise
// Set NODE_ENV=production explicitly when building for production
const isProduction = process.env.NODE_ENV === 'production';
console.log(`Using ${isProduction ? 'production' : 'development'} config`);

const nextConfig = isProduction ? productionConfig : developmentConfig;

export default nextConfig;
