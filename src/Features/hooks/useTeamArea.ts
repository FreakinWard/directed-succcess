import { gql } from 'graphql-request';

import useGraphQl from '@/hooks/useGraphQl';
import { TeamAreaData } from '@/models/StrapiResponse';

export const graphQuery = gql`
  query TeamArea {
    teamArea {
      data {
        attributes {
          Title
          Paragraph
          TeamMembers {
            data {
              id
              attributes {
                Name
                Role
                Image {
                  data {
                    attributes {
                      url
                      alternativeText
                      width
                      height
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

const adapter = data => {
  const rootTeamArea = data.teamArea.data.attributes;

  const title = rootTeamArea.Title;
  const paragraph = rootTeamArea.Paragraph;
  const teamMembers = rootTeamArea.TeamMembers.data.map(teamMember => {
    const root = teamMember.attributes;

    const id = teamMember.id;
    const name = root.Name;
    const role = root.Role;
    const image = root.Image.data.attributes;

    return {
      id,
      name,
      role,
      image: {
        ...image,
        url: `${process.env.strapiApi}${image.url}`,
      },
    };
  });

  return {
    title,
    paragraph,
    teamMembers,
  };
};

export default function useTeamArea() {
  return useGraphQl<TeamAreaData>({
    queryKey: ['teamArea'],
    select: adapter,
    graphQuery,
  });
}
