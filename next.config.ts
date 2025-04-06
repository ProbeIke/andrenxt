import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/andrenxt',
  assetPrefix: '/andrenxt',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
