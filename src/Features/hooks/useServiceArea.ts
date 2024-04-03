import { gql } from 'graphql-request';

import useStrapiCms from '@/hooks/useStrapiCms';
import { ServiceAreaData } from '@/models/StrapiResponse';

export const graphQuery = gql`
  query ServiceArea {
    serviceArea {
      data {
        attributes {
          Title
          Paragraph
          services {
            data {
              id
              attributes {
                Icon
                Name
                Text
              }
            }
          }
        }
      }
    }
  }
`;

const adapter = data => {
  const rootServiceArea = data.serviceArea.data.attributes;

  const title = rootServiceArea.Title;
  const paragraph = rootServiceArea.Paragraph;
  const services = rootServiceArea.services.data.map(service => {
    const root = service.attributes;

    const id = service.id;
    const icon = root.Icon;
    const name = root.Name;
    const text = root.Text;

    return {
      id,
      icon,
      name,
      text,
    };
  });

  return {
    title,
    paragraph,
    services,
  };
};

export default function useServiceArea() {
  return useStrapiCms<ServiceAreaData>({
    queryKey: ['serviceArea'],
    select: adapter,
    graphQuery,
  });
}
