import Nav from '../components/Nav'
import Footer from '../components/Footer'
import GalleryGrid from '../components/galleryPageComponents/GalleryGrid'
import FilterContainer from '../components/galleryPageComponents/FilterContainer'
import Hero from '../components/galleryPageComponents/Hero'
import data from '../assets/data/gallery/imageData.json'
import type { GalleryItemStructure } from '../types/types'

const GalleryPage = () => {
  const imgData: GalleryItemStructure[] = data
  
  return (
   <>
    <Nav />
    <Hero/>
    <div className="gallery-page">
        <FilterContainer/>
        <GalleryGrid data={imgData}/>
    </div>
    <Footer />
  
   </>
  )
}

export default GalleryPage
