import Nav from '../components/Nav'
import Footer from '../components/Footer'
import GalleryGrid from '../components/galleryPageComponents/GalleryGrid'
import FilterContainer from '../components/galleryPageComponents/FilterContainer'
import Hero from '../components/galleryPageComponents/Hero'
import data from '../assets/data/gallery/imageData.json'
import type { GalleryItemStructure } from '../types/types'
import { useState } from 'react'

const GalleryPage = () => {
  const imgData: GalleryItemStructure[] = data
  
  const [imgList, setImageList] = useState<GalleryItemStructure[]>(imgData)




  return (
   <>
    <Nav />
    <Hero/>
    <div className="gallery-page">
        <FilterContainer data={imgList} setList={setImageList}/>
        <GalleryGrid data={imgList}/>
    </div>
    <Footer />
  
   </>
  )
}

export default GalleryPage
