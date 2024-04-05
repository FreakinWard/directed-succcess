import Image from 'next/image';
import Link from 'next/link';

import { SocialMediaPlatformData } from '@/types/strapi/StrapiResponse';

import useSocialMediaPlatforms from '../../hooks/useSocialMediaPlatforms';

const SocialMediaLink = ({ url, image }: SocialMediaPlatformData) => (
  <Link href={url}>
    <i className="fa">
      <Image src={image.url} width={image.width} height={image.height} alt={image.alternateText} />
    </i>
  </Link>
);

export default function SocialMedia() {
  const { data: platforms } = useSocialMediaPlatforms();

  if (!platforms) return null;

  return (
    <div className="social">
      <ul>
        {platforms?.map(platform => (
          <li key={platform.id}>
            <SocialMediaLink {...platform} />
          </li>
        ))}
      </ul>
    </div>
  );
}
