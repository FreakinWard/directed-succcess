import { HeaderData } from '@/models/StrapiResponse';

import { SeedGraphQLQuery } from '../../../../types/seed/SeedGraphQLQuery';
import { HeaderEntityResponse } from '../../../../types/strapi/__generated__/graphql';

const data = {
  title: 'title-value',
  paragraph: 'paragraph-value',
} as HeaderData;

const graphqlResponse = {
  header: {
    data: {
      attributes: {
        Title: data.title,
        Paragraph: data.paragraph,
      },
    },
  },
};

export default {
  data,
  queryName: 'Header',
  graphqlResponse,
} as SeedGraphQLQuery<HeaderEntityResponse, HeaderData>;
