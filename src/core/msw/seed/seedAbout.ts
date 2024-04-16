import { SeedGraphQLQuery } from '@/types/seed/SeedGraphQLQuery';
import { Query } from '@/types/strapi/__generated__/graphql';
import { AboutResponse } from '@/types/strapi/StrapiResponse';

const data = {
  paragraph: 'paragraph-value',
  secondaryParagraph: 'secondary-paragraph-value',
  title: 'title-value',
  secondaryTitle: 'secondary-title-value',
  image: {
    url: 'https://strapi-cdn.com/about-image.png',
    alternateText: 'image-alternate-text-value',
    width: 100,
    height: 200,
  },
} as AboutResponse;

const graphqlResponse: Query = {
  about: {
    data: {
      attributes: {
        Paragraph: data.paragraph,
        SecondaryParagraph: data.secondaryParagraph,
        Title: data.title,
        SecondaryTitle: data.secondaryTitle,
        Image: {
          data: {
            // @ts-ignore
            attributes: data.image,
          },
        },
      },
    },
  },
};

const seedAbout = {
  data,
  queryName: 'About',
  graphqlResponse,
} as SeedGraphQLQuery<Query, AboutResponse>;

export default seedAbout;
