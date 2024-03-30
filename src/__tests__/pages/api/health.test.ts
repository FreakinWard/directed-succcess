import { testApiHandler } from 'next-test-api-route-handler';

import { mockEnv } from '../../../core/test.utils';
import health, { HealthTypes } from '../../../pages/api/health';

describe('/api/health', () => {
  mockEnv();

  it('should render expected health data', async () => {
    // arrange
    const handler = health;

    const expected = {
      name: 'nameValue',
      version: 'versionValue',
      buildNumber: 'set-in-ci-pipeline',
      buildJobUrl: 'set-in-ci-pipeline',
      status: 'ok',
      strapiApi: 'https://cms-strapi-server.azurewebsites.net/',
    };

    process.env.appName = expected.name;
    process.env.appVersion = expected.version;

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
