import { gql } from 'graphql-request';

import useStrapiCms from '@/hooks/useStrapiCms';
import { HeaderData } from '@/types/strapi/StrapiResponse';

export const graphQuery = gql`
  query Header {
    header {
      data {
        attributes {
          Title
          SecondaryTitle
          Paragraph
          BackgroundImage {
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
  const root = data.header.data.attributes;

  const title = root.Title;
  const secondaryTitle = root.SecondaryTitle;
  const paragraph = root.Paragraph;
  const backgroundImage = root.BackgroundImage.data.attributes;

  return {
    title,
    secondaryTitle,
    paragraph,
    backgroundImage,
  };
};

export default function useHeader() {
  return useStrapiCms<HeaderData>({
    queryKey: ['header'],
    select: adapter,
    graphQuery,
  });
}
