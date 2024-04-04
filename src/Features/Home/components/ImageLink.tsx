import Image from 'next/image';

import { ImageData } from '@/types/strapi/StrapiResponse';

interface ImageProps {
  title: string;
  largeImage: ImageData;
  smallImage: ImageData;
}

export default function ImageLink({ title, largeImage, smallImage }: ImageProps) {
  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        <a href={largeImage.url} title={title} data-lightbox-gallery="gallery1">
          <div className="hover-text">
            <h4>{title}</h4>
          </div>
          <Image
            src={smallImage?.url}
            width={smallImage.width}
            height={smallImage.height}
            alt={title}
          />
        </a>
      </div>
    </div>
  );
}
