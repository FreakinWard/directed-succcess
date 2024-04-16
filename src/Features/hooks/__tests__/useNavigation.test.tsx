import { renderHook, waitFor } from '@testing-library/react';

import { mockGraphQL } from '@/core/msw/handlers';
import seedPortfolioArea from '@/core/msw/seed/seedPortfolioArea';
import { server } from '@/core/msw/server';
import { AppWrapper as wrapper, mswMock } from '@/core/test.utils';

import useNavigation from '../useNavigation';

describe('useNavigation', () => {
  mswMock();

  it('should return expect data', async () => {
    // arrange
    const expected = [
      { title: 'About', link: '#about', isVisible: true },
      { title: 'Services', link: '#services', isVisible: true },
      { title: 'Gallery', link: '#portfolio', isVisible: true },
      { title: 'Testimonials', link: '#testimonials', isVisible: true },
      { title: 'Team', link: '#team', isVisible: true },
      { title: 'Contact', link: '#contact', isVisible: true },
    ];

    // act
    const { result } = renderHook(() => useNavigation(), { wrapper });

    // assert
    await waitFor(() => {
      expect(result.current.data).toEqual(expected);
    });
  });

  it.skip('should return items isVisible as false when data is unpublished', async () => {
    // arrange
    const expected = [
      { title: 'About', link: '#about', isVisible: true },
      { title: 'Services', link: '#services', isVisible: true },
      { title: 'Gallery', link: '#portfolio', isVisible: false },
      { title: 'Testimonials', link: '#testimonials', isVisible: true },
      { title: 'Team', link: '#team', isVisible: true },
      { title: 'Contact', link: '#contact', isVisible: true },
    ];

    const portfolioAreaData = null;

    // TODO: this isn't working because `server` should reference the original instance that setup msw
    server.use(
      mockGraphQL({
        queryName: seedPortfolioArea.queryName,
        graphqlResponse: portfolioAreaData,
        data: portfolioAreaData,
      })
    );

    // act
    const { result } = renderHook(() => useNavigation(), { wrapper });

    // assert
    await waitFor(() => {
      expect(result.current.data).toEqual(expected);
    });
  });
});
