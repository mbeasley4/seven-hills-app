import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "images.unsplash.com" },
      { hostname: "shs001.wpenginepowered.com" },
      { hostname: "www.7hills.org" },
    ],
  },
};

export default nextConfig;
