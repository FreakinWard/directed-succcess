import { render, screen, within } from '@testing-library/react';

import { AppWrapper as wrapper, mswMock } from '@/core/test.utils';

import Navigation from '../Navigation';

describe('Navigation', () => {
  mswMock();

  const expectNavigationToRender = async (expected: string[]) => {
    // arrange
    const navigation = await screen.findByRole('list', { name: 'navigation' });
    const navigationLinks = within(navigation).getAllByRole('listitem');
    const navigationItems = navigationLinks.map(item => item.textContent);

    // act
    // assert
    expect(navigationItems).toEqual(expected);
  };

  it('should render', () => {
    // arrange
    // act
    render(<Navigation />, { wrapper });
    // assert
  });

  it('should not render when navigation returns null', async () => {
    // arrange
    const expected = ['About', 'Services', 'Gallery', 'Testimonials', 'Team', 'Contact'];

    // act
    render(<Navigation />, { wrapper });

    // assert
    expect(screen.queryByRole('list')).not.toBeInTheDocument();

    await expectNavigationToRender(expected);
  });
});
