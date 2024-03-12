// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require('./package.json');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const isProduction = process.env.NODE_ENV === 'production';

module.exports = withBundleAnalyzer({
  env: {
    appName: packageJson.name,
    appVersion: packageJson.version,
    ciBuildNumber: packageJson.buildNumber,
    APPLICATIONINSIGHTS_CONNECTION_STRING: process.env.APPLICATIONINSIGHTS_CONNECTION_STRING,
    strapiApi: process.env.STRAPI_API,
    strapiApiGraphql: process.env.STRAPI_API_GRAPHQL,
  },
  output: 'standalone',
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: isProduction,
  },
  typescript: {
    ignoreBuildErrors: isProduction,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '1337',
      },
    ],
  },
});
