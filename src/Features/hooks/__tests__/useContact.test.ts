import { renderHook, waitFor } from '@testing-library/react';

import seedContact from '@/core/msw/seed/seedContact';
import { AppWrapper as wrapper, mswMock } from '@/core/test.utils';

import useContact from '../useContact';

describe('useContact', () => {
  mswMock();

  it('should return expected data', async () => {
    // arrange
    // act
    const { result } = renderHook(() => useContact(), { wrapper });

    // assert
    await waitFor(() => {
      expect(result.current.data).toEqual(seedContact.data);
    });
  });
});
