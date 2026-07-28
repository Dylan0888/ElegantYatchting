import Nav from '../components/Nav'
import Footer from '../components/Footer'
import GalleryGrid from '../components/galleryPageComponents/GalleryGrid'
import FilterContainer from '../components/galleryPageComponents/FilterContainer'
import Hero from '../components/galleryPageComponents/Hero'

const GalleryPage = () => {
  return (
   <>
    <Nav />
    <Hero/>
    <div className="gallery-page">
        <FilterContainer/>
        <GalleryGrid/>
    </div>
    <Footer />
  
   </>
  )
}

export default GalleryPage
