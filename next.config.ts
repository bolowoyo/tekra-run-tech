import type { NextConfig } from "next";

const isHostingerStaticBuild = process.env.HOSTINGER_STATIC_EXPORT === "1";

const nextConfig: NextConfig = isHostingerStaticBuild
  ? {
      // Hostinger serves this marketing site as static files. This produces
      // dist/client/index.html instead of a Cloudflare Worker-only bundle.
      output: "export",
      trailingSlash: true,
      images: {
        unoptimized: true,
      },
    }
  : {};

export default nextConfig;
