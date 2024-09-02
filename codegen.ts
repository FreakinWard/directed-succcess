import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'http://127.0.0.1:8080/graphql',
  generates: {
    './types/strapi/__generated__/': {
      preset: 'client',
    },
  },
};

export default config;
