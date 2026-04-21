import type { IconType } from "react-icons";

export type ImageStructure = {
    largeImg: string | null;
    smallImg: string | null;
    alt: string | null;
};

export  interface CarouselFeature  {
        icon: IconType,
        heading: string,
        text:string
    }