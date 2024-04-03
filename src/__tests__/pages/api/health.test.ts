import { testApiHandler } from 'next-test-api-route-handler';

import seedHealth from '@/core/msw/seed/seedHealth';

import health, { HealthTypes } from '../../../pages/api/health';

describe('/api/health', () => {
  it('should render expected health data', async () => {
    // arrange
    const handler = health;

    const expected = seedHealth.data;

    await testApiHandler<HealthTypes>({
      handler,
      test: async ({ fetch }) => {
        // act
        const res = await fetch({ method: 'POST', body: 'data' });
        const result = await res.json();

        // assert
        expect(result).toEqual(expected);
      },
    });
  });
});
