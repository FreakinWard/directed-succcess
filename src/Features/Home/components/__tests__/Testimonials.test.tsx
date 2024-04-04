import { render, screen } from '@testing-library/react';

import seedTestimonialArea from '@/core/msw/seed/seedTestimonialArea';
import { AppWrapper as wrapper, mswMock } from '@/core/test.utils';

import Testimonials from '../Testimonials';

describe('Testimonials', () => {
  mswMock();

  const tree = <Testimonials />;

  it('should render page title and paragraph from cms', async () => {
    // arrange
    // act
    render(tree, { wrapper });

    // assert
    await screen.findByText(seedTestimonialArea.data.title);
  });

  it('should render testimonial list from cms', async () => {
    // arrange
    // act
    render(tree, { wrapper });

    // assert
    await screen.findByText(seedTestimonialArea.data.title);

    seedTestimonialArea.data.testimonials.forEach(testimonial => {
      screen.getByText(`- ${testimonial.name}`);
      screen.getByText(`"${testimonial.statement}"`);

      // arrange
      const encodedImageUrl = encodeURIComponent(testimonial.image.url);
      const expectedImage = {
        ...testimonial.image,
        url: `http://localhost/_next/image?url=${encodedImageUrl}&w=256&q=75`,
      };
      const imageElement = screen.getByAltText(testimonial.name) as HTMLImageElement;

      expect(imageElement.src).toEqual(expectedImage.url);
      expect(imageElement.width).toEqual(expectedImage.width);
      expect(imageElement.height).toEqual(expectedImage.height);
      expect(imageElement.alt).toEqual(testimonial.name);
    });
  });
});
