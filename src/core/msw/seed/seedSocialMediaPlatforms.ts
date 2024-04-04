import { SeedGraphQLQuery } from '@/types/seed/SeedGraphQLQuery';
import { SocialMediaEntityResponse } from '@/types/strapi/__generated__/graphql';
import { SocialMediaPlatformData } from '@/types/strapi/StrapiResponse';

const data = [
  {
    id: 1,
    platform: 'LinkedIn',
    url: 'linkedin.com',
    image: {
      url: 'https://strapi-cdn.com/linkedin-image.png',
      alternateText: 'linkedin-alternate-text-value',
      width: 100,
      height: 200,
    },
  },
  {
    id: 2,
    platform: 'Facebook',
    url: 'facebook.com',
    image: {
      url: 'https://strapi-cdn.com/facebook-image.png',
      alternateText: 'facebook-alternate-text-value',
      width: 100,
      height: 200,
    },
  },
] as SocialMediaPlatformData[];

const graphqlResponse = {
  socialMedias: {
    data: data.map(item => ({
      id: item.id,
      attributes: {
        Platform: item.platform,
        url: item.url,
        Image: {
          data: {
            attributes: item.image,
          },
        },
      },
    })),
  },
} as SocialMediaEntityResponse;

export default {
  data,
  queryName: 'SocialMedias',
  graphqlResponse,
} as SeedGraphQLQuery<SocialMediaEntityResponse, SocialMediaPlatformData[]>;
