import { LandingPageData } from '@/models/strapi/LandingPageData';

import About from './components/About';
import Contact from './components/Contact';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Navigation from './components/Navigation';
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
      <Gallery gallery={landingPageData.gallery} />
      <Testimonials />
      <Team team={landingPageData.team} />
      <Contact contact={landingPageData.contact} />
    </div>
  );
}
