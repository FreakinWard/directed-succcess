import { render, screen } from '@testing-library/react';

import seedServiceArea from '@/core/msw/seed/seedServiceArea';
import { AppWrapper as wrapper, mswMock } from '@/core/test.utils';

import Services from '../Services';

describe('Services', () => {
  mswMock();

  const tree = <Services />;

  it('should render page title and paragraph from cms', async () => {
    // arrange
    // act
    render(tree, { wrapper });

    // assert
    await screen.findByText(seedServiceArea.data.title);
    await screen.findByText(seedServiceArea.data.paragraph);
  });

  it('should render services list from cms', async () => {
    // arrange
    // act
    render(tree, { wrapper });

    // assert
    await screen.findByText(seedServiceArea.data.title);

    seedServiceArea.data.services.forEach(service => {
      screen.getByText(service.name);
      screen.getByText(service.text);
    });
  });
});
