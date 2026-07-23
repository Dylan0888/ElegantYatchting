import type { IconType } from "react-icons";

export type StringToIcon = Record<string, IconType>;

{
  /* --- Carousel Types --- */
}
export type ImageStructure = {
  largeImg: string | null;
  smallImg: string | null;
  alt: string | null;
};

export interface CarouselFeature {
  icon: IconType;
  heading: string;
  text: string;
}

export type directions = "left" | "right";


{
  /* --- Award Types --- */
}

export type AwardStructure = {
  img: string;
  alt: string | null;
  title: string;
  description: string | null;
  provider: string;
};

export type Awards = AwardStructure[];

{
  /* --- --- --- --- --- */
}

export type Yacht ={
  name: string;
  status?: string;
  description: string;
  image: string;
  numGuests: number;
  numCrew: number;  
  length: number; // meters
  alt: string;
}

export type YachtCarouselLayout = Yacht[][]
  

{
  /* --- Attention Grabber Home Page Types --- */
}

export type CruiseAttentionGrabber = {
    title: string,
    description: string
    image: string
    icon: IconType
    buttonText: string
}



export type promoBanner = {
    title: string,
    description: string,
    buttonText: string
    img: string
}