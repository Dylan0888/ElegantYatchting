import React from 'react'
import GridItem from './GridItem'

const GalleryGrid = () => {
  return (
    <div className='flex flex-wrap gap-5 justify-evenly'>
        <GridItem/>
        <GridItem/>
        <GridItem/>
        <GridItem/>
        <GridItem/>
        <GridItem/>
      
    </div>
  )
}

export default GalleryGrid
