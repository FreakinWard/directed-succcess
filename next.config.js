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
    ciBuildJobUrl: packageJson.buildJobUrl,
    APPLICATIONINSIGHTS_CONNECTION_STRING: process.env.APPLICATIONINSIGHTS_CONNECTION_STRING,
    STRAPI_API: process.env.STRAPI_API ?? 'notset',
    GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
  },
  output: 'standalone',
  swcMinify: true,
  generateBuildId: async () => {
    // This could be anything, using the latest git hash
    return packageJson.buildNumber;
  },
  eslint: {
    ignoreDuringBuilds: isProduction,
  },
  typescript: {
    ignoreBuildErrors: isProduction,
  },

  images: {
    remotePatterns: [
      {
        protocol: process.env.REMOTE_IMAGE_PROTOCOL ?? 'https',
        hostname: process.env.REMOTE_IMAGE_HOST ?? 'cmsstrapist.blob.core.windows.net',
        port: process.env.REMOTE_IMAGE_PORT ?? '',
      },
      {
        protocol: 'https',
        hostname: 'strapi-cdn.com',
        port: '',
      },
    ],
  },

  // async headers() {
  //   if (process.env.NODE_ENV !== 'production') {
  //     return [];
  //   }
  //
  //   return [
  //     {
  //       source: '/:all*(css|js|gif|svg|jpg|jpeg|png|woff|woff2)',
  //       locale: false,
  //       headers: [
  //         {
  //           key: 'Cache-Control',
  //           value: 'public, max-age=31536000',
  //         },
  //       ],
  //     },
  //   ];
  // },
});
