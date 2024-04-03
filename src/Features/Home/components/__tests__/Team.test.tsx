import { render, screen } from '@testing-library/react';

import seedTeamArea from '@/core/msw/seed/seedTeamArea';
import { AppWrapper as wrapper, expectImageWithAttributes, mswMock } from '@/core/test.utils';

import Team from '../Team';

describe('Team', () => {
  mswMock();

  const tree = <Team />;

  it('should render page title and paragraph from cms', async () => {
    // arrange
    // act
    render(tree, { wrapper });

    // assert
    await screen.findByText(seedTeamArea.data.title);
    await screen.findByText(seedTeamArea.data.paragraph);
  });

  it('should render team list from cms', async () => {
    // arrange
    // act
    render(tree, { wrapper });

    // assert
    await screen.findByText(seedTeamArea.data.title);

    seedTeamArea.data.teamMembers.forEach(teamMember => {
      // arrange
      const expectedImage = {
        ...teamMember.image,
        alternateText: teamMember.name,
      };

      // assert
      screen.getByText(teamMember.name);
      expectImageWithAttributes(expectedImage);
    });
  });
});
