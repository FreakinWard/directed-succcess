import Image from 'next/image';

import useAbout from '../../hooks/useAbout';

const ParagraphSection = ({ children }) => (
  <div className="col-lg-6 col-sm-6 col-xs-12">{children}</div>
);

export default function About() {
  const { data: about } = useAbout();

  if (!about) return null;

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <Image
              src={about?.image.url}
              width={about?.image.width}
              height={about?.image.height}
              alt={about?.image.alternateText}
            />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>{about.title}</h2>
              {about.secondaryTitle ? <h3>{about.secondaryTitle}</h3> : null}
              <div className="list-style">
                <ParagraphSection>{about?.paragraph}</ParagraphSection>
                <ParagraphSection>{about?.secondaryParagraph}</ParagraphSection>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
