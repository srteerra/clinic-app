import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ["@chakra-ui/react"],
  },
  typescript: {
    ignoreBuildErrors: true, // 🚨 Ignora errores de tipo en build
  },
  eslint: {
    ignoreDuringBuilds: true, // 🚨 Ignora errores de eslint en build
  },
};

export default nextConfig;
