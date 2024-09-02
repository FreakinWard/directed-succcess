import { Enum_Socialmediaplatform_Type } from '@/types/strapi/__generated__/graphql';

export interface ImageData {
  url: string;
  alternateText: string;
  width: number;
  height: number;
}

export interface AboutResponse {
  paragraph: string;
  secondaryParagraph: string;
  title: string;
  secondaryTitle?: string;
  image: ImageData;
}

export interface HeaderData {
  title: string;
  secondaryTitle?: string;
  paragraph: string;
  backgroundImage: ImageData;
}

export interface ServiceAreaData {
  title: string;
  paragraph: string;
  services: {
    id: number;
    name: string;
    text: string;
    image: ImageData;
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

export interface ContactData {
  title: string;
  paragraph: string;
  address?: string;
  phone: string;
  email: string;
}

export interface SocialMediaPlatformData {
  id: number;
  type: Enum_Socialmediaplatform_Type;
  url: string;
  image: ImageData;
}
