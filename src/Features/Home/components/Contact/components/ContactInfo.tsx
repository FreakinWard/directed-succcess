import useContact from '../../../../hooks/useContact';
import Address from './Address';
import Email from './Email';
import Phone from './Phone';

export default function ContactInfo() {
  const { data: contact } = useContact();

  return (
    <div className="col-md-3 col-md-offset-1 contact-info">
      <div className="contact-item">
        <h3>Contact Info</h3>
      </div>
      <Address contact={contact} />
      <Phone contact={contact} />
      <Email contact={contact} />
    </div>
  );
}
