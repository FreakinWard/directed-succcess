import { renderHook, waitFor } from '@testing-library/react';

import seedServiceArea from '@/core/msw/seed/seedServiceArea';
import { AppWrapper as wrapper, mswMock } from '@/core/test.utils';

import useServiceArea from '../useServiceArea';

describe('useServiceArea', () => {
  mswMock();

  it('should return expected data', async () => {
    // arrange
    // act
    const { result } = renderHook(() => useServiceArea(), { wrapper });

    // assert
    await waitFor(() => {
      expect(result.current.data).toEqual(seedServiceArea.data);
    });
  });
});
