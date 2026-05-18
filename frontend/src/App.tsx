import Nav from "./components/Nav"
import Carousel from "./components/homePageComponents/CarouselComponents/Carousel"
import CarouselFooter from "./components/homePageComponents/CarouselComponents/CarouselFooter"
import {carouselSet} from "./assets/carousellSet"
import Footer from "./components/Footer"

import YachtCard from "./components/homePageComponents/YachtFleetComponents/YachtCard"
import YachtFleetCarousel from "./components/homePageComponents/YachtFleetComponents/YachtFleetCarousel"

function App() {  
  return (
    <>
      <Nav />
      <section>
        <Carousel images={carouselSet}/>
        <CarouselFooter/>
      </section>

      {/* Delete Later */}
      <YachtFleetCarousel/>



      <Footer/>
      
    </>
  )
}
export default App
