import { gql } from 'graphql-request';

import useGraphQl from '@/hooks/useGraphQl';
import { PortfolioAreaData } from '@/models/StrapiResponse';

export const graphQuery = gql`
  query TestimonialArea {
    portfolioArea {
      data {
        attributes {
          Title
          Paragraph
          portfolios {
            data {
              id
              attributes {
                Title
                SmallImage {
                  data {
                    attributes {
                      url
                      alternativeText
                      width
                      height
                    }
                  }
                }
                LargeImage {
                  data {
                    attributes {
                      url
                      alternativeText
                      width
                      height
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const adapter = data => {
  const rootPortfolioArea = data.portfolioArea.data.attributes;

  const title = rootPortfolioArea.Title;
  const paragraph = rootPortfolioArea.Paragraph;
  const portfolios = rootPortfolioArea.portfolios.data.map(portfolios => {
    const root = portfolios.attributes;

    const id = portfolios.id;
    const title = root.Title;
    const smallImage = root.SmallImage.data.attributes;
    const largeImage = root.LargeImage.data.attributes;

    return {
      id,
      title,
      smallImage: {
        ...smallImage,
        url: `${process.env.strapiApi}${smallImage.url}`,
      },
      largeImage: {
        ...largeImage,
        url: `${process.env.strapiApi}${largeImage.url}`,
      },
    };
  });

  return {
    title,
    paragraph,
    portfolios,
  };
};

export default function usePortfolioArea() {
  return useGraphQl<PortfolioAreaData>({
    queryKey: ['portfolioArea'],
    select: adapter,
    graphQuery,
  });
}
