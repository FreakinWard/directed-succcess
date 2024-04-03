import { ServiceAreaData } from '@/models/StrapiResponse';

import { SeedGraphQLQuery } from '../../../../types/seed/SeedGraphQLQuery';
import { ServiceAreaEntity } from '../../../../types/strapi/__generated__/graphql';

const data = {
  title: 'title-value',
  paragraph: 'paragraph-value',
  services: [
    {
      id: 1,
      icon: 'icon-class-name',
      name: 'service-name',
      text: 'text-description',
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
                Icon: data.services[0].icon,
                Name: data.services[0].name,
                Text: data.services[0].text,
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
