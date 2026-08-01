import Nav from '../components/Nav'
import Footer from '../components/Footer'
import GalleryGrid from '../components/galleryPageComponents/GalleryGrid'
import FilterContainer from '../components/galleryPageComponents/FilterContainer'
import Hero from '../components/galleryPageComponents/Hero'
import data from '../assets/data/gallery/imageData.json'
import type { GalleryItemStructure } from '../types/galleryTypes'
import { useState, useMemo } from 'react'
import type {filters} from '../types/galleryTypes'

const GalleryPage = () => {
  const imgData: GalleryItemStructure[] = data
  
  // const [imgList, setImageList] = useState<GalleryItemStructure[]>(imgData)

  const [selectedFilters, setFilters] = useState<filters>({
    location: "",
    date: "",
    tags: "",
  });

  // Packs filter state for props 
  const filterState ={
    selectedFilters,
    setFilters
  }

  
  // Memoized filtered image list based on selected filters
  const imgList = useMemo((): GalleryItemStructure[] => {
    let filteredList = imgData

    if (selectedFilters.location) {
      filteredList = filteredList.filter((item) => item.location === selectedFilters.location)
    }

    if (selectedFilters.date) {
      filteredList = filteredList.filter((item) => item.date === selectedFilters.date)
    }

    if (selectedFilters.tags) {
      filteredList = filteredList.filter((item) => item.tags.includes(selectedFilters.tags))
    }
    return filteredList

  }, [selectedFilters, imgData])


  // do some form of checking to grey out or disable filter buttons that have no results in the current filtered list.
  




  return (
    <>
      <Nav />
      <Hero />
      <div className="gallery-page">
        <FilterContainer data={imgData} filterState={filterState} />
        <GalleryGrid data={imgList} />
      </div>
      <Footer />
    </>
  )
}

export default GalleryPage
