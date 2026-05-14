import type { IconType } from "react-icons";

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
  /* --- --- --- --- --- */
}


export type Yacht ={
  name: string;
  status: string;
  description: string;
  image: string;
  numGuests: number;
  numCrew: number;  
  length: number; // meters
  alt: string;
}
