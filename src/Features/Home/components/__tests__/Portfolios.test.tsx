import { render, screen } from '@testing-library/react';

import seedPortfolioArea from '@/core/msw/seed/seedPortfolioArea';
import { AppWrapper as wrapper, expectImageWithAttributes, mswMock } from '@/core/test.utils';

import Portfolios from '../Portfolios';

describe('Portfolio', () => {
  mswMock();

  const tree = <Portfolios />;

  it('should render page title and paragraph from cms', async () => {
    // arrange
    // act
    render(tree, { wrapper });

    // assert
    await screen.findByText(seedPortfolioArea.data.title);
    await screen.findByText(seedPortfolioArea.data.paragraph);
  });

  it('should render portfolio list from cms', async () => {
    // arrange
    // act
    render(tree, { wrapper });

    // assert
    await screen.findByText(seedPortfolioArea.data.title);

    seedPortfolioArea.data.portfolios.forEach(project => {
      // arrange
      const expectedSmallImage = {
        ...project.smallImage,
        alternateText: project.title,
      };

      // assert
      screen.getByText(project.title);
      expectImageWithAttributes(expectedSmallImage);
    });
  });
});
