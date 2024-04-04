import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  // schema: process.env.STRAPI_API,
  schema: 'https://cms-strapi-server.azurewebsites.net/graphql',
  generates: {
    './types/strapi/__generated__/': {
      preset: 'client',
    },
  },
};

export default config;
