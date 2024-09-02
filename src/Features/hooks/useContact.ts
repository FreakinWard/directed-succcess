import { gql } from 'graphql-request';

import useStrapiCms from '@/hooks/useStrapiCms';
import { ContactData } from '@/types/strapi/StrapiResponse';

export const graphQuery = gql`
  query Contact {
    contact {
      data {
        attributes {
          Title
          Paragraph
          Address
          Phone
          Email
        }
      }
    }
  }
`;

const adapter = data => {
  // console.log('test', { data });

  const root = data.contact.data.attributes;

  const title = root.Title;
  const paragraph = root.Paragraph;
  const phone = root.Phone;
  const address = root.Address;
  const email = root.Email;

  return {
    title,
    paragraph,
    address,
    phone,
    email,
  };
};

export default function useContact() {
  return useStrapiCms<ContactData>({
    queryKey: ['contact'],
    select: adapter,
    graphQuery,
  });
}
