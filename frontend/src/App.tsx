import Nav from "./components/Nav"
import Carousel from "./components/homePageComponents/CarouselComponents/Carousel"
import CarouselFooter from "./components/homePageComponents/CarouselComponents/CarouselFooter"
import {carouselSet} from "./assets/carousellSet"
import Footer from "./components/Footer"

import YachtCard from "./components/homePageComponents/YachtFleetComponents/YachtCard"




function App() {

 

  
  return (
    <>
      <Nav />
      <section>
        <Carousel images={carouselSet}/>
        <CarouselFooter/>
      </section>

      {/* Delete Later */}
      <YachtCard/>



      <Footer/>
      
    </>
  )
}
export default App
