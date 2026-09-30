import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // All images are local (in public/), no external domains needed
    formats: ["image/webp", "image/avif"],
  },
};

export default nextConfig;
