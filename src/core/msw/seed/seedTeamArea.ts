import { SeedGraphQLQuery } from '@/types/seed/SeedGraphQLQuery';
import { TeamAreaEntity } from '@/types/strapi/__generated__/graphql';
import { TeamAreaData } from '@/types/strapi/StrapiResponse';

const data = {
  title: 'title-value',
  paragraph: 'paragraph-value',
  teamMembers: [
    {
      id: 1,
      name: 'name-value',
      role: 'role-value',
      image: {
        url: 'https://strapi-cdn.com/team-member-image.png',
        alternateText: 'team-mmember-alternate-text-value',
        width: 100,
        height: 200,
      },
    },
  ],
} as TeamAreaData;

const dataToImage = imageData => ({
  data: {
    attributes: imageData,
  },
});

const graphqlResponse = {
  teamArea: {
    data: {
      attributes: {
        id: 1,
        Title: data.title,
        Paragraph: data.paragraph,
        TeamMembers: {
          data: [
            {
              id: data.teamMembers[0].id,
              attributes: {
                Name: data.teamMembers[0].name,
                Role: data.teamMembers[0].role,
                Image: dataToImage(data.teamMembers[0].image),
              },
            },
          ],
        },
      },
    },
  },
} as TeamAreaEntity;

export default {
  data,
  queryName: 'TeamArea',
  graphqlResponse,
} as SeedGraphQLQuery<TeamAreaEntity, TeamAreaData>;
