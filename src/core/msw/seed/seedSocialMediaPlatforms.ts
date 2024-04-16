import { SeedGraphQLQuery } from '@/types/seed/SeedGraphQLQuery';
import {
  Enum_Socialmediaplatform_Type,
  SocialMediaPlatformEntityResponse,
} from '@/types/strapi/__generated__/graphql';
import { SocialMediaPlatformData } from '@/types/strapi/StrapiResponse';

const data: SocialMediaPlatformData[] = [
  {
    id: 1,
    type: Enum_Socialmediaplatform_Type.LinkedIn,
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
    type: Enum_Socialmediaplatform_Type.Facebook,
    url: 'facebook.com',
    image: {
      url: 'https://strapi-cdn.com/facebook-image.png',
      alternateText: 'facebook-alternate-text-value',
      width: 100,
      height: 200,
    },
  },
];

const graphqlResponse = {
  socialMediaPlatforms: {
    data: data.map(item => ({
      id: item.id,
      attributes: {
        Type: item.type,
        Url: item.url,
        Image: {
          data: {
            attributes: item.image,
          },
        },
      },
    })),
  },
};

export default {
  data,
  queryName: 'SocialMediaPlatforms',
  graphqlResponse,
} as SeedGraphQLQuery<SocialMediaPlatformEntityResponse, SocialMediaPlatformData[]>;
