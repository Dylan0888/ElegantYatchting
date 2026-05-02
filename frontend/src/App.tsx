import Nav from "./components/Nav"
import Carousel from "./components/homePageComponents/Carousel"
import CarouselFooter from "./components/homePageComponents/CarouselFooter"
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
