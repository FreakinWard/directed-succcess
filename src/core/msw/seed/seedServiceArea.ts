import { SeedGraphQLQuery } from '@/types/seed/SeedGraphQLQuery';
import { ServiceAreaEntity } from '@/types/strapi/__generated__/graphql';
import { ServiceAreaData } from '@/types/strapi/StrapiResponse';

const data = {
  title: 'title-value',
  paragraph: 'paragraph-value',
  services: [
    {
      id: 1,
      name: 'service-name',
      text: 'text-description',
      image: {
        url: 'https://strapi-cdn.com/about-image.png',
        alternateText: 'image-alternate-text-value',
        width: 100,
        height: 200,
      },
    },
  ],
} as ServiceAreaData;

const graphqlResponse = {
  serviceArea: {
    data: {
      attributes: {
        id: 1,
        Title: data.title,
        Paragraph: data.paragraph,
        services: {
          data: [
            {
              id: data.services[0].id,
              attributes: {
                Name: data.services[0].name,
                Text: data.services[0].text,
                Image: {
                  data: {
                    // @ts-ignore
                    attributes: data.services[0].image,
                  },
                },
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
  queryName: 'ServiceArea',
  graphqlResponse,
} as SeedGraphQLQuery<ServiceAreaEntity, ServiceAreaData>;
