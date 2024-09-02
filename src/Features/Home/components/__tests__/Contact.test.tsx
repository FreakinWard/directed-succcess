import { queryByAttribute, render, screen } from '@testing-library/react';

import seedContact from '@/core/msw/seed/seedContact';
import seedSocialMediaPlatforms from '@/core/msw/seed/seedSocialMediaPlatforms';
import { AppWrapper as wrapper, mswMock } from '@/core/test.utils';

import Contact from '../Contact/Contact';

describe('Contact', () => {
  mswMock();

  const tree = <Contact />;

  it('should render page title from cms', async () => {
    // arrange
    // act
    render(tree, { wrapper });

    // assert
    await screen.findByText(seedContact.data.title);
  });

  it('should render contact details from cms', async () => {
    // arrange
    // act
    render(tree, { wrapper });

    // assert
    await screen.findByText(seedContact.data.title);

    screen.getByText(seedContact.data.paragraph);
    screen.getByText(seedContact.data.address);
    screen.getByText(seedContact.data.phone);
    screen.getByText(seedContact.data.email);
  });

  it('should render expected social media links from cms', async () => {
    // arrange
    const getByHref = queryByAttribute.bind(null, 'href');

    // act
    const dom = render(tree, { wrapper });

    // assert
    await screen.findByText(seedContact.data.title);

    seedSocialMediaPlatforms.data.forEach(socialMediaPlatform => {
      const title = socialMediaPlatform.type;
      getByHref(dom.container, title);
    });
  });
});
