import path from "node:path";

const nextConfig = {
  turbopack: {
    resolveAlias: {
      "@": path.resolve("./"),
    },
  },
  webpack: (config) => {
    config.resolve.alias["@"] = path.resolve("./");
    return config;
  },
};

export default nextConfig;
