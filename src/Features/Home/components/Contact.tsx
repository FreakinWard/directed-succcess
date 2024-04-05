import useContact from '../../hooks/useContact';
import SocialMedia from './SocialMedia';

// const initialState = {
//   name: '',
//   email: '',
//   message: '',
// };

export default function Contact() {
  const { data: contact } = useContact();
  // const [{ name, email, message }, setState] = useState(initialState);

  // const handleChange = e => {
  //   const { name, value } = e.target;
  //   setState(prevState => ({ ...prevState, [name]: value }));
  // };

  // const clearState = () => setState({ ...initialState });

  /* istanbul ignore next */
  const handleSubmit = e => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    // console.log(name, email, message);

    {
      /* replace below with your own Service ID, Template ID and Public Key from your EmailJS account */
    }

    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY').then(
    //   result => {
    //     console.log(result.text);
    //     clearState();
    //   },
    //   error => {
    //     console.log(error.text);
    //   }
    // );
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>{contact?.title}</h2>
                <p>{contact?.paragraph}</p>
              </div>
              <form name="sentMessage" validate="true" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows={4}
                    placeholder="Message"
                    required
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {contact?.address}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{' '}
                {contact?.phone}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{' '}
                {contact?.email}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
