import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Portfolios from './components/Portfolios';
import Services from './components/Services';
import Team from './components/Team';
import Testimonials from './components/Testimonials';

export default function Home() {
  return (
    <div>
      <Navigation />
      <Header />
      <About />
      <Services />
      <Portfolios />
      <Testimonials />
      <Team />
      <Contact />
    </div>
  );
}
