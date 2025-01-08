import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "4mb",
    },
  },
  images: {
    remotePatterns: [{
      protocol: "https",
      hostname: "yr1gs0h9xrcpieu4.public.blob.vercel-storage.com"
    }]
  }
};

export default nextConfig;
