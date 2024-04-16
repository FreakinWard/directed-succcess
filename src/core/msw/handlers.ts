import { graphql, rest } from 'msw';

import seedAbout from '@/core/msw/seed/seedAbout';
import seedContact from '@/core/msw/seed/seedContact';
import seedHeader from '@/core/msw/seed/seedHeader';
import seedPortfolioArea from '@/core/msw/seed/seedPortfolioArea';
import seedServiceArea from '@/core/msw/seed/seedServiceArea';
import seedSocialMediaPlatforms from '@/core/msw/seed/seedSocialMediaPlatforms';
import seedTeamArea from '@/core/msw/seed/seedTeamArea';
import seedTestimonialArea from '@/core/msw/seed/seedTestimonialArea';
import { SeedGraphQLQuery } from '@/types/seed/SeedGraphQLQuery';

import seedAuth from './seed/seedAuth';
import seedHealth from './seed/seedHealth';

const mockHandler = (statusText = null, statusCode = 200) => {
  return async (req, res, ctx) => {
    return res(ctx.status(statusCode, statusText), ctx.json(statusText));
  };
};

const mockRequestGet = (url, responseData, statusCode = 200) => {
  return rest.get(url, mockHandler(responseData, statusCode));
};

export const mockGraphQL = <T, U>(
  { queryName, graphqlResponse }: SeedGraphQLQuery<T, U>,
  url = `*/graphql`
) => {
  const resource = graphql.link(url);

  return resource.query(queryName, (_req, res, ctx) => res(ctx.data(graphqlResponse)));
};
const mockPassThroughGet = url => rest.get(url, req => req.passthrough());

export default [
  // auth
  mockRequestGet('*/api/auth/session', seedAuth.session),
  mockRequestGet('*/api/auth/providers', seedAuth.providers),

  // app
  mockRequestGet(seedHealth.clientUrl, seedHealth.data),
  mockGraphQL(seedAbout),
  mockGraphQL(seedContact),
  mockGraphQL(seedHeader),
  mockGraphQL(seedServiceArea),
  mockGraphQL(seedTestimonialArea),
  mockGraphQL(seedPortfolioArea),
  mockGraphQL(seedTeamArea),
  mockGraphQL(seedSocialMediaPlatforms),

  // nextjs dev
  mockPassThroughGet('/_next/static/*'),
  mockPassThroughGet('/_next/image*'),
  mockPassThroughGet('/_next/data/*'),
  mockPassThroughGet('/__nextjs_original-stack-frame'),
  mockPassThroughGet('/vercel.svg'),
  mockPassThroughGet('/flight-select'),
  mockPassThroughGet('/favicon.ico'),
  mockPassThroughGet('*chrome-extension*'),
  mockPassThroughGet('*fonts.googleapis.*'),
  mockPassThroughGet('*fonts.gstatic.*'),
  mockPassThroughGet('/fonts/*'),
  mockPassThroughGet('/img/*'),
  mockPassThroughGet(`${process.env.REMOTE_IMAGE_HOST}/*`),
];
