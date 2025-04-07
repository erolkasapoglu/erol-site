/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Register the service worker
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.output.webassemblyModuleFilename = 'static/wasm/[modulehash].wasm';
    }
    return config;
  },
};

export default nextConfig;

