import { renderHook, waitFor } from '@testing-library/react';

import seedAbout from '@/core/msw/seed/seedAbout';
import { AppWrapper as wrapper, mswMock } from '@/core/test.utils';

import useAbout from '../useAbout';

describe('useAbout', () => {
  mswMock();

  it('should return expected data', async () => {
    // arrange
    // act
    const { result } = renderHook(() => useAbout(), { wrapper });

    // assert
    await waitFor(() => {
      expect(result.current.data).toEqual(seedAbout.data);
    });
  });
});
