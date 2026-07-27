import Nav from '../components/Nav'
import Footer from '../components/Footer'
import GalleryGrid from '../components/galleryPageComponents/GalleryGrid'

const GalleryPage = () => {
  return (
   <>
    <Nav />
    <div className="gallery-page">
        <GalleryGrid/>
    </div>
    <Footer />
  
   </>
  )
}

export default GalleryPage
