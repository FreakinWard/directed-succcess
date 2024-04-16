import { dehydrate, DehydratedState, QueryClient } from '@tanstack/react-query';

import graphQLRequest from '@/core/utils/graphQLRequest';

import HomePage from '../Features/Home/';
import { graphQuery as aboutQuery } from '../Features/hooks/useAbout';
import { graphQuery as contactQuery } from '../Features/hooks/useContact';
import { graphQuery as headerQuery } from '../Features/hooks/useHeader';
import { graphQuery as portfolioAreaQuery } from '../Features/hooks/usePortfolioArea';
import { graphQuery as serviceAreaQuery } from '../Features/hooks/useServiceArea';
import { graphQuery as socialMediaPlatformsQuery } from '../Features/hooks/useSocialMediaPlatforms';
import { graphQuery as teamAreaQuery } from '../Features/hooks/useTeamArea';
import { graphQuery as testimonialAreaQuery } from '../Features/hooks/useTestimonialArea';

interface Props {
  props: {
    dehydratedState: DehydratedState;
    fallback: boolean;
  };
  revalidate: number | boolean;
}

const prefetchConfig = (queryName, query) => ({
  queryKey: [queryName],
  queryFn: () => graphQLRequest(query),
});

export async function getStaticProps(): Promise<Props> {
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery(prefetchConfig('about', aboutQuery)),
    queryClient.prefetchQuery(prefetchConfig('header', headerQuery)),
    queryClient.prefetchQuery(prefetchConfig('serviceArea', serviceAreaQuery)),
    queryClient.prefetchQuery(prefetchConfig('testimonialArea', testimonialAreaQuery)),
    queryClient.prefetchQuery(prefetchConfig('portfolioArea', portfolioAreaQuery)),
    queryClient.prefetchQuery(prefetchConfig('teamArea', teamAreaQuery)),
    queryClient.prefetchQuery(prefetchConfig('contact', contactQuery)),
    queryClient.prefetchQuery(prefetchConfig('socialMediaPlatforms', socialMediaPlatformsQuery)),
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      fallback: true,
    },
    revalidate: 60,
  };
}

export default function Home() {
  return <HomePage />;
}

Home.title = 'Home';
