import { Gallery as GalleryType } from '@/models/strapi/LandingPageData';

import Image from './Image';

interface GalleryProps {
  gallery: GalleryType[];
}

export default function Gallery({ gallery }: GalleryProps) {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Gallery</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.</p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {gallery.map((d, i) => (
              <div key={`${d.title}-${i}`} className="col-sm-6 col-md-4 col-lg-4">
                <Image title={d.title} largeImage={d.largeImage} smallImage={d.smallImage} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
