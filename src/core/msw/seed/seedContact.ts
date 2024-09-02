import { SeedGraphQLQuery } from '@/types/seed/SeedGraphQLQuery';
import { ContactEntityResponse } from '@/types/strapi/__generated__/graphql';
import { ContactData } from '@/types/strapi/StrapiResponse';

const data: ContactData = {
  title: 'title-value',
  paragraph: 'paragraph-value',
  address: 'address-value',
  phone: 'phone-value',
  email: 'email-value',
};

const graphqlResponse = {
  contact: {
    data: {
      attributes: {
        Title: data.title,
        Paragraph: data.paragraph,
        Address: data.address,
        Phone: data.phone,
        Email: data.email,
      },
    },
  },
};

export default {
  data,
  queryName: 'Contact',
  graphqlResponse,
} as SeedGraphQLQuery<ContactEntityResponse, ContactData>;
