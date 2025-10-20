import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Avoid emitting the default trailing-slash redirect manifest entry.
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
