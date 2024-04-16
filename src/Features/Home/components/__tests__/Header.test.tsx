import { render, screen } from '@testing-library/react';

import seedHeader from '@/core/msw/seed/seedHeader';
import { AppWrapper as wrapper, mswMock } from '@/core/test.utils';

// import Header from '../Header';
import Header from '../Header';
describe('Header', () => {
  mswMock();

  const tree = <Header />;

  it('should render title from cms', async () => {
    // arrange
    // act
    render(tree, { wrapper });

    // assert
    await screen.findByText(seedHeader.data.title);
  });

  it('should render secondary title from cms', async () => {
    // arrange
    // act
    render(tree, { wrapper });

    // assert
    await screen.findByText(seedHeader.data.secondaryTitle);
  });

  it('should render header title and paragraph from cms', async () => {
    // arrange
    // act
    render(tree, { wrapper });

    // assert
    await screen.findByText(seedHeader.data.title);

    screen.getByText(seedHeader.data.paragraph);
  });
});
