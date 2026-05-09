import Nav from "./components/Nav"
import Carousel from "./components/homePageComponents/CarouselComponents/Carousel"
import CarouselFooter from "./components/homePageComponents/CarouselComponents/CarouselFooter"
import {carouselSet} from "./assets/carousellSet"


function App() {

 

  
  return (
    <>
      <Nav />
      <section>
        <Carousel images={carouselSet}/>
        <CarouselFooter/>
       

      </section>
      
    </>
  )
}
export default App
