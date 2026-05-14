import Nav from "./components/Nav"
import Carousel from "./components/homePageComponents/CarouselComponents/Carousel"
import CarouselFooter from "./components/homePageComponents/CarouselComponents/CarouselFooter"
import {carouselSet} from "./assets/carousellSet"
import Footer from "./components/Footer"

import YachtCard from "./components/homePageComponents/YachtFleetComponents/YachtCard"
import YachtFleet from "./components/homePageComponents/YachtFleetComponents/YachtFleet"




function App() {

 

  
  return (
    <>
      <Nav />
      <section>
        <Carousel images={carouselSet}/>
        <CarouselFooter/>
      </section>

      {/* Delete Later */}
      <YachtFleet/>



      <Footer/>
      
    </>
  )
}
export default App
