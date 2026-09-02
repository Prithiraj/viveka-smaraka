import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const pagesBasePath = "/viveka-smaraka";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  ...(isGitHubPages
    ? {
        output: "export" as const,
        basePath: pagesBasePath,
        assetPrefix: pagesBasePath,
        trailingSlash: true,
      }
    : {}),
  images: {
    unoptimized: isGitHubPages,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "vivekasmaraka.org",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;
