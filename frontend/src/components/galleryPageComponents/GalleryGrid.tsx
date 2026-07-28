import React from 'react'
import GridItem from './GridItem'
import type { GalleryItemStructure } from '../../types/types'

interface props {
  data: GalleryItemStructure[]
}

const GalleryGrid = ({data}:props) => {

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
      {data.map((item, index) => (
        <GridItem key={index} data={item} />
      ))}
    </section>
  )
}

export default GalleryGrid