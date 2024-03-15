import { LandingPageData } from '@/models/strapi/LandingPageData';

import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Portfolio from './components/Portfolio';
import Services from './components/Services';
import Team from './components/Team';
import Testimonials from './components/Testimonials';

interface Props {
  landingPageData: LandingPageData;
}

export default function Home({ landingPageData }: Props) {
  return (
    <div>
      <Navigation />
      <Header />
      <About />
      <Services />
      <Portfolio />
      <Testimonials />
      <Team />
      <Contact contact={landingPageData.contact} />
    </div>
  );
}
