import Image from 'next/image';

import useServiceArea from '../../hooks/useServiceArea';

export default function Services() {
  const { data: serviceArea } = useServiceArea();

  if (!serviceArea) return null;

  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>{serviceArea?.title}</h2>
          <p>{serviceArea?.paragraph}</p>
        </div>
        <div className="row">
          {serviceArea?.services?.map(service => (
            <div key={`${service.name}-${service.id}`} className="col-md-4">
              <i className="fa">
                <Image
                  src={service.image.url}
                  width={service.image.width}
                  height={service.image.height}
                  alt={service.image.alternateText}
                />
              </i>
              <div className="service-desc">
                <h3>{service.name}</h3>
                <p>{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
