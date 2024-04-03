import { renderHook, waitFor } from '@testing-library/react';

import seedTestimonialArea from '@/core/msw/seed/seedTestimonialArea';
import { AppWrapper as wrapper, mswMock } from '@/core/test.utils';

import useTestimonialArea from '../useTestimonialArea';

describe('useTestimonialArea', () => {
  mswMock();

  it('should return expected data', async () => {
    // arrange
    // act
    const { result } = renderHook(() => useTestimonialArea(), { wrapper });

    // assert
    await waitFor(() => {
      expect(result.current.data).toEqual(seedTestimonialArea.data);
    });
  });
});
