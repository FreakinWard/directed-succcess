import { gql } from 'graphql-request';

import useStrapiCms from '@/hooks/useStrapiCms';
import { SocialMediaPlatformData } from '@/types/strapi/StrapiResponse';

export const graphQuery = gql`
  query SocialMediaPlatforms {
    socialMediaPlatforms {
      data {
        id
        attributes {
          Type
          Url
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
  const root = data.socialMediaPlatforms.data;

  return root.map(platform => ({
    id: platform.id,
    type: platform.attributes.Type,
    url: platform.attributes.Url,
    image: platform.attributes.Image.data.attributes,
  }));
};

export default function useSocialMediaPlatforms() {
  return useStrapiCms<SocialMediaPlatformData[]>({
    queryKey: ['socialMediaPlatforms'],
    select: adapter,
    graphQuery,
  });
}
