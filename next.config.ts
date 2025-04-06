import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/andrenxt',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
