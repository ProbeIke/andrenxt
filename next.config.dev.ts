import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Remove static export for development
  images: {
    unoptimized: true,
  },
};

export default nextConfig;