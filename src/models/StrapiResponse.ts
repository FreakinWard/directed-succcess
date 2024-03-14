export interface AboutResponse {
  paragraph: string;
  image: {
    url: string;
    width: number;
    height: number;
  };
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
