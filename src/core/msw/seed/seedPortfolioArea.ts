import { SeedGraphQLQuery } from '@/types/seed/SeedGraphQLQuery';
import { PortfolioAreaEntity } from '@/types/strapi/__generated__/graphql';
import { PortfolioAreaData } from '@/types/strapi/StrapiResponse';

const data: PortfolioAreaData = {
  title: 'Portfolio Area Title',
  paragraph: 'paragraph-value',
  portfolios: [
    {
      id: 1,
      title: 'Portfolio Title',
      smallImage: {
        url: 'https://strapi-cdn.com/small-image.png',
        alternateText: 'small-image-alternate-text-value',
        width: 100,
        height: 200,
      },
      largeImage: {
        url: 'https://strapi-cdn.com/large-image.png',
        alternateText: 'large-image-alternate-text-value',
        width: 100,
        height: 200,
      },
    },
  ],
};

const dataToImage = imageData => ({
  data: {
    attributes: imageData,
  },
});

const graphqlResponse = {
  portfolioArea: {
    data: {
      attributes: {
        id: 1,
        Title: data.title,
        Paragraph: data.paragraph,
        portfolios: {
          data: [
            {
              id: data.portfolios[0].id,
              attributes: {
                Title: data.portfolios[0].title,
                SmallImage: dataToImage(data.portfolios[0].smallImage),
                LargeImage: dataToImage(data.portfolios[0].largeImage),
              },
            },
          ],
        },
      },
    },
  },
};

export default {
  data,
  queryName: 'PortfolioArea',
  graphqlResponse,
} as SeedGraphQLQuery<PortfolioAreaEntity, PortfolioAreaData>;
