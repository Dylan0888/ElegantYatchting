import React from 'react'
import data from '../../assets/data/gallery/imageData.json'
import type { GalleryItemStructure } from '../../types/types'
import GridItem from './GridItem'

const GalleryGrid = () => {
  const images: GalleryItemStructure[] = data
  return (
    <section
      className="
          relative
          flex flex-wrap
          justify-evenly
          gap-8
          mb-10
          py-12
          bg-linear-to-b
          from-transparent
          via-black/40
          to-transparent
        "
    >
      {images.map((item, index) => (
        <GridItem key={index} data={item} />
      ))}
    </section>
  )
}

export default GalleryGrid
