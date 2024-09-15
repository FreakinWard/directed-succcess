import { useMemo } from 'react';

import useAbout from './useAbout';
import useContact from './useContact';
import usePortfolioArea from './usePortfolioArea';
import useServiceArea from './useServiceArea';
import useTeamArea from './useTeamArea';
import useTestimonialArea from './useTestimonialArea';

export default function useNavigation() {
  const { data: aboutAreaData } = useAbout();
  const { data: serviceAreaData } = useServiceArea();
  const { data: portfolioAreaData } = usePortfolioArea();
  const { data: testimonialAreaData } = useTestimonialArea();
  const { data: teamAreaData } = useTeamArea();
  const { data: contactData } = useContact();

  const data = useMemo(
    () => [
      { title: 'About', link: '#about', isVisible: Boolean(aboutAreaData) },
      { title: 'Services', link: '#services', isVisible: Boolean(serviceAreaData) },
      { title: 'Gallery', link: '#portfolio', isVisible: Boolean(portfolioAreaData) },
      { title: 'Testimonials', link: '#testimonials', isVisible: Boolean(testimonialAreaData) },
      { title: 'Team', link: '#team', isVisible: Boolean(teamAreaData) },
      { title: 'Contact', link: '#contact', isVisible: Boolean(contactData) },
    ],
    [
      aboutAreaData,
      contactData,
      portfolioAreaData,
      serviceAreaData,
      teamAreaData,
      testimonialAreaData,
    ]
  );

  const activeNavigations = useMemo(() => data?.filter(item => item.isVisible), [data]);

  return {
    data,
    activeNavigations,
  };
}
