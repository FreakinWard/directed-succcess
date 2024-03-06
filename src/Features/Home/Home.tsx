import { LandingPageData } from '../../Models/LandingPageData';
import About from './components/About';
import Contact from './components/Contact';
import Features from './components/Features';
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
      <Header header={landingPageData.header} />
      <Features features={landingPageData.features} />
      <About about={landingPageData.about} />
      <Services services={landingPageData.services} />
      <Gallery gallery={landingPageData.gallery} />
      <Testimonials testimonials={landingPageData.testimonials} />
      <Team team={landingPageData.team} />
      <Contact contact={landingPageData.contact} />
    </div>
  );
}
