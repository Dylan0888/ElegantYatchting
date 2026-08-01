import Nav from '../components/Nav'
import Footer from '../components/Footer'
import GalleryGrid from '../components/galleryPageComponents/GalleryGrid'
import FilterContainer from '../components/galleryPageComponents/FilterContainer'
import Hero from '../components/galleryPageComponents/Hero'
import data from '../assets/data/gallery/imageData.json'
import type { GalleryItemStructure } from '../types/galleryTypes'
import { useState } from 'react'
import type {filters} from '../types/galleryTypes'

const GalleryPage = () => {
  const imgData: GalleryItemStructure[] = data
  
  const [imgList, setImageList] = useState<GalleryItemStructure[]>(imgData)

  const [selectedFilters, setFilters] = useState<filters>({
    location: "",
    date: "",
    tags: "",
  });

  // Packs filter state for props 
  const filterState ={
    selectedFilters: selectedFilters,
    setFilters: setFilters
  }

  return (
   <>
    <Nav />
    <Hero/>
    <div className="gallery-page">
        <FilterContainer data={imgList} filterState={filterState}/>
        <GalleryGrid data={imgList}/>
    </div>
    <Footer />
  
   </>
  )
}

export default GalleryPage
