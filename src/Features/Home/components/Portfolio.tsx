import usePortfolioArea from '../../hooks/usePortfolioArea';
import ImageLink from './ImageLink';

export default function Portfolio() {
  const { data: portfolioArea } = usePortfolioArea();

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>{portfolioArea?.title}</h2>
          <p>{portfolioArea?.paragraph}</p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {portfolioArea?.portfolios.map(portfolio => (
              <div
                key={`${portfolio.title}-${portfolio.id}`}
                className="col-sm-6 col-md-4 col-lg-4"
              >
                <ImageLink
                  title={portfolio.title}
                  largeImage={portfolio.largeImage}
                  smallImage={portfolio.smallImage}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
