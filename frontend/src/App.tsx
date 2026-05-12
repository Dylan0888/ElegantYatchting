import Nav from "./components/Nav"
import Carousel from "./components/homePageComponents/CarouselComponents/Carousel"
import CarouselFooter from "./components/homePageComponents/CarouselComponents/CarouselFooter"
import {carouselSet} from "./assets/carousellSet"
import Footer from "./components/Footer"



function App() {

 

  
  return (
    <>
      <Nav />
      <section>
        <Carousel images={carouselSet}/>
        <CarouselFooter/>
      </section>
      <p>sasdas</p>
      <Footer/>
      
    </>
  )
}
export default App
