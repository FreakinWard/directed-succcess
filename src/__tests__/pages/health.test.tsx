import { render } from '@testing-library/react';

import { getByTextContent } from '@/core/userActions';

import seedHealth from '../../core/msw/seed/seedHealth';
import { AppWrapper as wrapper, mswMock } from '../../core/test.utils';
import Health from '../../pages/health';

describe('health', () => {
  mswMock();

  it('should render expected health values', async () => {
    // arrange
    const healthMock = seedHealth.data;
    const tree = <Health health={healthMock} />;

    // act
    render(tree, { wrapper });

    // assert
    getByTextContent(`Name: ${seedHealth.data.name}`);
    getByTextContent(`Version: ${seedHealth.data.version}`);
    getByTextContent(`BuildNumber: ${seedHealth.data.buildNumber}`);
    getByTextContent(`BuildJobUrl: ${seedHealth.data.buildJobUrl}`);
    getByTextContent(`StrapiApi: ${seedHealth.data.strapiApi}`);
    getByTextContent(`Status: ${seedHealth.data.status}`);
  });
});
