import { useMemo } from 'react';

import useHeader from '../../hooks/useHeader';

export default function Header() {
  const { data: header } = useHeader();

  const backgroundProps = useMemo(() => {
    const backgroundImageUrl = header?.backgroundImage?.url;
    const hasBackgroundImage = Boolean(backgroundImageUrl);

    return hasBackgroundImage
      ? {
          background: `url(${header.backgroundImage.url})`,
          WebkitBackgroundSize: 'cover',
          MozBackgroundSize: 'cover',
          backgroundSize: 'cover',
          OBackgroundSize: 'cover',
        }
      : {
          backgroundColor: '#e5e5e5',
        };
  }, [header]);

  return (
    <header id="header">
      <div
        className="intro"
        style={{
          display: 'table',
          width: '100%',
          padding: 0,
          ...backgroundProps,
        }}
      >
        <div className="intro" style={{ background: 'rgba(0, 0, 0, 0.2)' }}>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {header?.title}
                  <span></span>
                </h1>
                <p>{header?.paragraph}</p>
                <a href="#services" className="btn btn-custom btn-lg page-scroll">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
