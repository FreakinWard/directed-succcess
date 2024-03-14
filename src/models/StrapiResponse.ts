interface Image {
  url: string;
  width: number;
  height: number;
}

export interface AboutResponse {
  paragraph: string;
  image: Image;
  whys: string[];
  whys2: string[];
}

export interface HeaderData {
  paragraph: string;
  title: string;
}

export interface ServiceAreaData {
  title: string;
  paragraph: string;
  services: {
    id: number;
    icon: string;
    name: string;
    text: string;
  }[];
}

export interface TestimonialAreaData {
  title: string;
  testimonials: {
    id: number;
    name: string;
    statement: string;
    image: Image;
  }[];
}
