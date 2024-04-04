import { renderHook, waitFor } from '@testing-library/react';

import seedHeader from '@/core/msw/seed/seedHeader';
import { AppWrapper as wrapper, mswMock } from '@/core/test.utils';

import useHeader from '../useHeader';

describe('useHeader', () => {
  mswMock();

  it('should return expected data', async () => {
    // arrange
    // act
    const { result } = renderHook(() => useHeader(), { wrapper });

    // assert
    await waitFor(() => {
      expect(result.current.data).toEqual(seedHeader.data);
    });
  });
});
