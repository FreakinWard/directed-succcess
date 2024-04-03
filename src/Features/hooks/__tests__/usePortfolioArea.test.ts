import { renderHook, waitFor } from '@testing-library/react';

import seedPortfolioArea from '@/core/msw/seed/seedPortfolioArea';
import { AppWrapper as wrapper, mswMock } from '@/core/test.utils';

import usePortfolioArea from '../usePortfolioArea';

describe('usePortfolioArea', () => {
  mswMock();

  it('should return expected data', async () => {
    // arrange
    // act
    const { result } = renderHook(() => usePortfolioArea(), { wrapper });

    // assert
    await waitFor(() => {
      expect(result.current.data).toEqual(seedPortfolioArea.data);
    });
  });
});
