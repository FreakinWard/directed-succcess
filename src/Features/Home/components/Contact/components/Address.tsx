import { ContactData } from '@/types/strapi/StrapiResponse';

interface Props {
  contact: ContactData;
}

export default function Address({ contact }: Readonly<Props>) {
  if (!contact?.address) return null;

  return (
    <div className="contact-item">
      <p>
        <span>
          <i className="fa fa-map-marker"></i> Address
        </span>
        {contact?.address}
      </p>
    </div>
  );
}
