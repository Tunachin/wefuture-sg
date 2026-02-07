/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: function (config, options) {
    config.experiments = {
      asyncWebAssembly: true,
      topLevelAwait: true,
      layers: true
    };
    return config;
  },
  compiler: {
    styledComponents: true,
  },
};
module.exports = nextConfig;
