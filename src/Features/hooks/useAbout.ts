import { gql } from 'graphql-request';

import useStrapiCms from '@/hooks/useStrapiCms';
import { AboutResponse } from '@/types/strapi/StrapiResponse';

export const graphQuery = gql`
  query About {
    about {
      data {
        attributes {
          Paragraph
          SecondaryTitle
          SecondaryParagraph
          Image {
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
`;

const adapter = data => {
  const root = data.about.data.attributes;

  const paragraph = root.Paragraph;
  const secondaryParagraph = root.SecondaryParagraph;
  const title = root.Title;
  const secondaryTitle = root.SecondaryTitle;
  const image = root.Image.data.attributes;

  // const whys = root.whys.data.map(x => x.attributes.Why);
  // const whys2 = root.whys2.data.map(x => x.attributes.Why);

  return {
    paragraph,
    secondaryParagraph,
    title,
    secondaryTitle,
    image,
  };
};

export default function useAbout() {
  return useStrapiCms<AboutResponse>({
    queryKey: ['about'],
    select: adapter,
    graphQuery,
  });
}
