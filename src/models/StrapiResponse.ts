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
