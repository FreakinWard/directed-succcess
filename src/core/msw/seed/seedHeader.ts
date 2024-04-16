import { SeedGraphQLQuery } from '@/types/seed/SeedGraphQLQuery';
import { HeaderEntityResponse } from '@/types/strapi/__generated__/graphql';
import { HeaderData } from '@/types/strapi/StrapiResponse';

const data = {
  title: 'title-value',
  secondaryTitle: 'secondary-title-value',
  paragraph: 'paragraph-value',
  backgroundImage: {
    url: 'https://strapi-cdn.com/header-background-image.png',
    alternateText: 'image-alternate-text-value',
    width: 100,
    height: 200,
  },
} as HeaderData;

const graphqlResponse = {
  header: {
    data: {
      attributes: {
        Title: data.title,
        SecondaryTitle: data.secondaryTitle,
        Paragraph: data.paragraph,
        BackgroundImage: {
          data: {
            attributes: data.backgroundImage,
          },
        },
      },
    },
  },
} as HeaderEntityResponse;

export default {
  data,
  queryName: 'Header',
  graphqlResponse,
} as SeedGraphQLQuery<HeaderEntityResponse, HeaderData>;
