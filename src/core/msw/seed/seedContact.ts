import { ContactData } from '@/models/StrapiResponse';

import { SeedGraphQLQuery } from '../../../../types/seed/SeedGraphQLQuery';
import { ContactEntityResponse } from '../../../../types/strapi/__generated__/graphql';

const data = {
  title: 'title-value',
  paragraph: 'paragraph-value',
  address: 'address-value',
  phone: 'phone-value',
  email: 'email-value',
  facebook: 'facebook-value',
  twitter: 'twitter-value',
  youtube: 'youtube-value',
} as ContactData;

const graphqlResponse = {
  contact: {
    data: {
      attributes: {
        Title: data.title,
        Paragraph: data.paragraph,
        Address: data.address,
        Phone: data.phone,
        Email: data.email,
        Facebook: data.facebook,
        Twitter: data.twitter,
        Youtube: data.youtube,
      },
    },
  },
};

export default {
  data,
  queryName: 'Contact',
  graphqlResponse,
} as SeedGraphQLQuery<ContactEntityResponse, ContactData>;
