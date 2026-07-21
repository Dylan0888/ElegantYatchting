import type { IconType } from "react-icons"

export interface heroData {
        page: string
        primHead: string
        secHead: string
        desc: string
        img: string
    }

export interface personalApproachProps {
    img: {
        src: string
        alt: string
    },
    heading: string
    subHeading: string
    para1: string
    para2: string
} 

export interface aboutFeatures {
    icon: IconType
    title: string
    text: string
}