import Nav from "./components/Nav"
import Carousel from "./components/homePageComponents/Carousel"
import {carouselSet} from "./assets/carousellSet"

function App() {

 

  
  return (
    <>
      <Nav />
      <Carousel images={carouselSet}/>
    </>
  )
}
export default App
