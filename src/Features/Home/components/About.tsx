import Image from 'next/image';

import useAbout from '../../hooks/useAbout';

const WhyList = ({ whys }) => {
  return <ul>{whys?.map((why, index) => <li key={`${why}-${index}`}>{why}</li>)}</ul>;
};

export default function About() {
  const { data: about } = useAbout();

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <Image
              src={about?.image.url}
              width={about?.image.width}
              height={about?.image.height}
              alt="About Image"
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Us</h2>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">{about?.paragraph}</div>
                <hr />
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <WhyList whys={about?.whys} />
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <WhyList whys={about?.whys2} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
