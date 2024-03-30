import { gql } from 'graphql-request';

import useStrapiCms from '@/hooks/useStrapiCms';
import { TestimonialAreaData } from '@/models/StrapiResponse';

export const graphQuery = gql`
  query TestimonialArea {
    testimonialArea {
      data {
        attributes {
          Title
          testimonials {
            data {
              id
              attributes {
                Name
                Statement
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
  const rootTestimonialArea = data.testimonialArea.data.attributes;

  const title = rootTestimonialArea.Title;
  const testimonials = rootTestimonialArea.testimonials.data.map(testimonial => {
    const root = testimonial.attributes;

    const id = testimonial.id;
    const name = root.Name;
    const statement = root.Statement;
    const image = root.Image.data.attributes;

    return {
      id,
      name,
      statement,
      image,
    };
  });

  return {
    title,
    testimonials,
  };
};

export default function useTestimonialArea() {
  return useStrapiCms<TestimonialAreaData>({
    queryKey: ['testimonialArea'],
    select: adapter,
    graphQuery,
  });
}
