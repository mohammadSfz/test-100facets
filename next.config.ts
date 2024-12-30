import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.100facets.ai",
      },
    ],
  },
};

export default nextConfig;
