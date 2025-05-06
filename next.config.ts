import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config, { isServer }) {
    if (!isServer) {
      // Ensuring framer-motion is resolved correctly in the client side
      config.resolve.alias["framer-motion"] = require.resolve("framer-motion");
    }
    return config;
  },
  
};

export default nextConfig;
