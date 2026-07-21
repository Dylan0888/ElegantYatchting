type Headings = {
    head: string,
    sub: string
}
export interface heroData {
        page: string
        headings: Headings
        desc: string
        img: string
    }

export interface personalApproachProps {
    img: {
        src: string
        alt: string
    },
    headings: Headings
    para1: string
    para2: string
} 

export interface aboutFeatures {
    icon: string
    title: string
    text: string
}

export interface ctaProps {
    img: {
        src: string
        alt: string
    },
    headings: Headings
    para: string
    buttonText: string
}

