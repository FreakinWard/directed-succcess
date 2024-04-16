import { renderHook, waitFor } from '@testing-library/react';

import seedSocialMediaPlatforms from '@/core/msw/seed/seedSocialMediaPlatforms';
import { AppWrapper as wrapper, mswMock } from '@/core/test.utils';

import useSocialMediaPlatforms from '../useSocialMediaPlatforms';

describe('useSocialMediaPlatforms', () => {
  mswMock();

  it('should return expected data', async () => {
    // arrange
    // act
    const { result } = renderHook(() => useSocialMediaPlatforms(), { wrapper });

    // assert
    await waitFor(() => {
      expect(result.current.data).toEqual(seedSocialMediaPlatforms.data);
    });
  });
});
