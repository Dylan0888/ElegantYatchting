import Nav from "./components/Nav"
import Carousel from "./components/homePageComponents/Carousel"
import CarouselFooter from "./components/homePageComponents/CarouselFooter"
import {carouselSet} from "./assets/carousellSet"
import icon from "./assets/imgs/icon.png"


function App() {

 

  
  return (
    <>
      <Nav />
      <section>
        <Carousel images={carouselSet}/>
        <CarouselFooter/>
        <img src={icon} alt="Elegant Yachting Icon" className="w-[80px]" />

      </section>
      
    </>
  )
}
export default App
