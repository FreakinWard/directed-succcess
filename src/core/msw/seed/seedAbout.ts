import { SeedGraphQLQuery } from '@/types/seed/SeedGraphQLQuery';
import { AboutEntityResponse } from '@/types/strapi/__generated__/graphql';
import { AboutResponse } from '@/types/strapi/StrapiResponse';

const data = {
  paragraph: 'paragraph-value',
  image: {
    url: 'https://strapi-cdn.com/about-image.png',
    alternateText: 'image-alternate-text-value',
    width: 100,
    height: 200,
  },
  whys: ['why-value-1'],
  whys2: ['whys2-value-1'],
} as AboutResponse;

const graphqlResponse = {
  about: {
    data: {
      attributes: {
        Paragraph: data.paragraph,
        whys: {
          data: [
            {
              attributes: {
                Why: data.whys[0],
              },
            },
          ],
        },
        whys2: {
          data: [
            {
              attributes: {
                Why: data.whys2[0],
              },
            },
          ],
        },
        Image: {
          data: {
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
} as SeedGraphQLQuery<AboutEntityResponse, AboutResponse>;

export default seedAbout;
