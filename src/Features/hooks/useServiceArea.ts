import { gql } from 'graphql-request';

import useStrapiCms from '@/hooks/useStrapiCms';
import { ServiceAreaData } from '@/types/strapi/StrapiResponse';

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
                Name
                Text
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
    const name = root.Name;
    const text = root.Text;
    const image = root.Image.data.attributes;

    return {
      id,
      name,
      text,
      image,
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
