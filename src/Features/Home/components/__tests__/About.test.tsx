import { render, screen } from '@testing-library/react';

import seedAbout from '@/core/msw/seed/seedAbout';
import { AppWrapper as wrapper, mswMock } from '@/core/test.utils';

import About from '../About';

describe('About', () => {
  mswMock();
  const tree = <About />;

  it('should render expected image with attributes', async () => {
    // arrange
    const encodedImageUrl = encodeURIComponent(seedAbout.data.image.url);
    const expectedImage = {
      ...seedAbout.data.image,
      url: `http://localhost/_next/image?url=${encodedImageUrl}&w=256&q=75`,
    };

    // act
    render(tree, { wrapper });

    // arrange
    const imageElement = (await screen.findByAltText(
      expectedImage.alternateText
    )) as HTMLImageElement;

    // assert
    expect(imageElement.src).toEqual(expectedImage.url);
    expect(imageElement.width).toEqual(expectedImage.width);
    expect(imageElement.height).toEqual(expectedImage.height);
    expect(imageElement.alt).toEqual(expectedImage.alternateText);
  });

  it('should render paragraph text from cms', async () => {
    // arrange
    // act
    render(tree, { wrapper });

    // assert
    screen.getByText(seedAbout.data.paragraph);
  });

  it('should render secondary paragraph text from cms', async () => {
    // arrange
    // act
    render(tree, { wrapper });

    // assert
    screen.getByText(seedAbout.data.secondaryParagraph);
  });
});
