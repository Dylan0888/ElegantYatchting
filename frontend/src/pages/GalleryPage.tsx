import Nav from '../components/Nav'
import Footer from '../components/Footer'

const GalleryPage = () => {
  return (
   <>
    <Nav />
    <div className="gallery-page">
      <h1>Gallery</h1>
      <p>Welcome to the gallery page! Here you can find a collection of our best works.</p>
      {/* Add your gallery content here */}
    </div>
    <Footer />
  
   </>
  )
}

export default GalleryPage
