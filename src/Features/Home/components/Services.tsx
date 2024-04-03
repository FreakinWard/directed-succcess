import { Services as ServicesType } from '@/models/strapi/LandingPageData';

interface ServicesProps {
  services: ServicesType[];
}

export default function Services({ services }: ServicesProps) {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
        </div>
        <div className="row">
          {services.map((d, i) => (
            <div key={`${d.name}-${i}`} className="col-md-4">
              {' '}
              <i className={d.icon}></i>
              <div className="service-desc">
                <h3>{d.name}</h3>
                <p>{d.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
