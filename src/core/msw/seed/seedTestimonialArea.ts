import { SeedGraphQLQuery } from '@/types/seed/SeedGraphQLQuery';
import { TestimonialAreaEntity } from '@/types/strapi/__generated__/graphql';
import { TestimonialAreaData } from '@/types/strapi/StrapiResponse';

const data = {
  title: 'title-value',
  testimonials: [
    {
      name: 'name-value',
      statement: 'statement-value',
      image: {
        url: 'https://strapi-cdn.com/about-image.png',
        alternateText: 'image-alternate-text-value',
        width: 100,
        height: 200,
      },
    },
  ],
} as TestimonialAreaData;

const graphqlResponse = {
  testimonialArea: {
    data: {
      attributes: {
        Title: data.title,
        testimonials: {
          data: [
            {
              id: data.testimonials[0].id,
              attributes: {
                Name: data.testimonials[0].name,
                Statement: data.testimonials[0].statement,
                Image: {
                  data: {
                    attributes: data.testimonials[0].image,
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
  queryName: 'TestimonialArea',
  graphqlResponse,
} as SeedGraphQLQuery<TestimonialAreaEntity, TestimonialAreaData>;
