import { ContactData } from '@/types/strapi/StrapiResponse';

interface Props {
  contact: ContactData;
}

export default function Email({ contact }: Readonly<Props>) {
  if (!contact?.email) return null;

  return (
    <div className="contact-item">
      <p>
        <span>
          <i className="fa fa-envelope-o"></i> Email
        </span>{' '}
        {contact?.email}
      </p>
    </div>
  );
}
