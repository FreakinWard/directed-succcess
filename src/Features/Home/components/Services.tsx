import useServiceArea from '../../hooks/useServiceArea';

const serviceIconMap = {
  WordPress: 'fa fa-wordpress',
  CartArrowDown: 'fa fa-cart-arrow-down',
  CloudDownload: 'fa fa-cloud-download',
  Language: 'fa fa-language',
  Plane: 'fa fa-plane',
  PieChart: 'fa fa-pie-chart',
};

export default function Services() {
  const { data: serviceArea } = useServiceArea();

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
              <i className={serviceIconMap[service.icon]}></i>
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
