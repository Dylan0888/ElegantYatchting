export interface filters {
  location: string
  date: string
  tags: string
}

export type FilterCategory = "location" | "date" | "tags"

export interface GalleryItemStructure {
    img: {
        src: string
        alt: string
    },
    title: string,
    location: string,
    date: string,
    tags: string[]

}