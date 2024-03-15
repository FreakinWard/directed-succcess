export interface ImageData {
  url: string;
  width: number;
  height: number;
}

export interface AboutResponse {
  paragraph: string;
  image: ImageData;
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
    image: ImageData;
  }[];
}

export interface PortfolioAreaData {
  title: string;
  paragraph: string;
  portfolios: {
    id: number;
    title: string;
    smallImage: ImageData;
    largeImage: ImageData;
  }[];
}

export interface TeamAreaData {
  title: string;
  paragraph: string;
  teamMembers: {
    id: number;
    name: string;
    role: string;
    image: ImageData;
  }[];
}
