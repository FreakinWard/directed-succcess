import { renderHook, waitFor } from '@testing-library/react';

import seedTeamArea from '@/core/msw/seed/seedTeamArea';
import { AppWrapper as wrapper, mswMock } from '@/core/test.utils';

import useTeamArea from '../useTeamArea';

describe('useTeamArea', () => {
  mswMock();

  it('should return expected data', async () => {
    // arrange
    // act
    const { result } = renderHook(() => useTeamArea(), { wrapper });

    // assert
    await waitFor(() => {
      expect(result.current.data).toEqual(seedTeamArea.data);
    });
  });
});
