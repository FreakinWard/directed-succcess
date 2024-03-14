import { dehydrate, DehydratedState, QueryClient } from '@tanstack/react-query';
import { InferGetStaticPropsType } from 'next';

import graphQLRequest from '@/core/utils/graphQLRequest';
import { LandingPageData } from '@/models/strapi/LandingPageData';

import HomePage from '../Features/Home/';
import { graphQuery as aboutQuery } from '../Features/hooks/useAbout';

const landingPageData = {
  header: {
    title: 'We are a Landing Page',
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo nibh ante facilisis bibendum.',
  },
  about: {
    paragraph:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    Why: ['Lorem ipsum dolor', 'Tempor incididunt', 'Lorem ipsum dolor', 'Incididunt ut labore'],
    Why2: [
      'Aliquip ex ea commodo',
      'Lorem ipsum dolor',
      'Exercitation ullamco',
      'Lorem ipsum dolor',
    ],
  },
  gallery: [
    {
      title: 'Project Title',
      largeImage: 'img/portfolio/01-large.jpg',
      smallImage: 'img/portfolio/01-small.jpg',
    },
    {
      title: 'Project Title',
      largeImage: 'img/portfolio/02-large.jpg',
      smallImage: 'img/portfolio/02-small.jpg',
    },
    {
      title: 'Project Title',
      largeImage: 'img/portfolio/03-large.jpg',
      smallImage: 'img/portfolio/03-small.jpg',
    },
    {
      title: 'Project Title',
      largeImage: 'img/portfolio/04-large.jpg',
      smallImage: 'img/portfolio/04-small.jpg',
    },
    {
      title: 'Project Title',
      largeImage: 'img/portfolio/05-large.jpg',
      smallImage: 'img/portfolio/05-small.jpg',
    },
    {
      title: 'Project Title',
      largeImage: 'img/portfolio/06-large.jpg',
      smallImage: 'img/portfolio/06-small.jpg',
    },
    {
      title: 'Project Title',
      largeImage: 'img/portfolio/07-large.jpg',
      smallImage: 'img/portfolio/07-small.jpg',
    },
    {
      title: 'Project Title',
      largeImage: 'img/portfolio/08-large.jpg',
      smallImage: 'img/portfolio/08-small.jpg',
    },
    {
      title: 'Project Title',
      largeImage: 'img/portfolio/09-large.jpg',
      smallImage: 'img/portfolio/09-small.jpg',
    },
  ],
  services: [
    {
      icon: 'fa fa-wordpress',
      name: 'Lorem ipsum dolor',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.',
    },
    {
      icon: 'fa fa-cart-arrow-down',
      name: 'Consectetur adipiscing',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.',
    },
    {
      icon: 'fa fa-cloud-download',
      name: 'Lorem ipsum dolor',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.',
    },
    {
      icon: 'fa fa-language',
      name: 'Consectetur adipiscing',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.',
    },
    {
      icon: 'fa fa-plane',
      name: 'Lorem ipsum dolor',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.',
    },
    {
      icon: 'fa fa-pie-chart',
      name: 'Consectetur adipiscing',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at.',
    },
  ],
  testimonials: [
    {
      img: 'img/testimonials/01.jpg',
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."',
      name: 'John Doe',
    },
    {
      img: 'img/testimonials/02.jpg',
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."',
      name: 'Johnathan Doe',
    },
    {
      img: 'img/testimonials/03.jpg',
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."',
      name: 'John Doe',
    },
    {
      img: 'img/testimonials/04.jpg',
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."',
      name: 'Johnathan Doe',
    },
    {
      img: 'img/testimonials/05.jpg',
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."',
      name: 'John Doe',
    },
    {
      img: 'img/testimonials/06.jpg',
      text: '"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sedasd commodo nibh ante facilisis bibendum dolor feugiat at."',
      name: 'Johnathan Doe',
    },
  ],
  team: [
    {
      img: 'img/team/01.jpg',
      name: 'John Doe',
      job: 'Director',
    },
    {
      img: 'img/team/02.jpg',
      name: 'Mike Doe',
      job: 'Senior Designer',
    },
    {
      img: 'img/team/03.jpg',
      name: 'Jane Doe',
      job: 'Senior Designer',
    },
    {
      img: 'img/team/04.jpg',
      name: 'Karen Doe',
      job: 'Project Manager',
    },
  ],
  contact: {
    address: '4321 California St, San Francisco, CA 12345 ',
    phone: '+1 123 456 1234',
    email: 'info@company.com',
    facebook: 'fb.com',
    twitter: 'twitter.com',
    youtube: 'youtube.com',
  },
  features: [
    {
      icon: 'fa fa-comments-o',
      title: 'Lorem ipsum',
      text: 'Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.',
    },
    {
      icon: 'fa fa-bullhorn',
      title: 'Lorem ipsum',
      text: 'Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.',
    },
    {
      icon: 'fa fa-group',
      title: 'Lorem ipsum',
      text: 'Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.',
    },
    {
      icon: 'fa fa-magic',
      title: 'Lorem ipsum',
      text: 'Lorem ipsum dolor sit amet placerat facilisis felis mi in tempus eleifend pellentesque natoque etiam.',
    },
  ],
};

interface Props {
  props: {
    landingPageData: LandingPageData;
    dehydratedState: DehydratedState;
  };
}

export async function getStaticProps(): Promise<Props> {
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ['about'],
      queryFn: () => graphQLRequest(aboutQuery),
    }),
  ]);

  return {
    props: {
      landingPageData,
      dehydratedState: dehydrate(queryClient),
    },
  };
}

export default function Home({ landingPageData }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <HomePage landingPageData={landingPageData} />;
}

Home.title = 'Home';
