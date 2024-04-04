import { gql } from 'graphql-request';

import useStrapiCms from '@/hooks/useStrapiCms';
import { SocialMediaPlatformData } from '@/types/strapi/StrapiResponse';

export const graphQuery = gql`
  query SocialMedias {
    socialMedias {
      data {
        id
        attributes {
          Platform
          url
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
  const root = data.socialMedias.data;

  return root.map(platform => ({
    id: platform.id,
    platform: platform.attributes.Platform,
    url: platform.attributes.url,
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
