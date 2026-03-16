import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    runtime: 'edge',
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
