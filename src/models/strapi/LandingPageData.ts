export interface Header {
  title: string;
  paragraph: string;
}

export interface About {
  paragraph: string;
  Why: string[];
  Why2: string[];
}

export interface Gallery {
  title: string;
  largeImage: string;
  smallImage: string;
}

export interface Services {
  icon: string;
  text: string;
  name: string;
}

export interface Testimonials {
  img: string;
  text: string;
  name: string;
}

export interface Team {
  img: string;
  name: string;
  job: string;
}

export interface Contact {
  address: string;
  phone: string;
  email: string;
  facebook: string;
  twitter: string;
  youtube: string;
}

export interface LandingPageData {
  header: Header;
  about: About;
  gallery: Gallery[];
  services: Services[];
  testimonials: Testimonials[];
  team: Team[];
  contact: Contact;
}
