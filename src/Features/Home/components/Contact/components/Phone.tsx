import { ContactData } from '@/types/strapi/StrapiResponse';

interface Props {
  contact: ContactData;
}

export default function Phone({ contact }: Readonly<Props>) {
  const phone = contact?.phone;

  if (!phone) return null;

  return (
    <div className="contact-item">
      <p>
        <span>
          <i className="fa fa-phone"></i> Phone
        </span>
        {contact?.phone}
      </p>
    </div>
  );
}
