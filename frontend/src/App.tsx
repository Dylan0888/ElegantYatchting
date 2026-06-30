import Nav from "./components/Nav"
import Carousel from "./components/homePageComponents/CarouselComponents/Carousel"
import CarouselFooter from "./components/homePageComponents/CarouselComponents/CarouselFooter"
import {carouselSet} from "./assets/carousellSet"
import Footer from "./components/Footer"


import YachtFleetCarousel from "./components/homePageComponents/YachtFleetComponents/YachtFleetCarousel"

import Award from "./components/homePageComponents/Award"


function App() {  
  return (
    <>
      <Nav />
      
      <section>
        <Carousel images={carouselSet}/>
        <CarouselFooter/>
      </section>

      
      <YachtFleetCarousel/>


     <Award/>

      <Footer/>
      
    </>
  )
}
export default App
