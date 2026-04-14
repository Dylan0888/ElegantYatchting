import Nav from "./components/Nav"
import Carousel from "./components/homePageComponents/Carousel"

function App() {

 
  const images = [
      "src/assets/imgs/carouselImages/yachtImg1(16-9).png",
      "/src/assets/imgs/carouselImages/yachtImg1(4-5).png",
      "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
      "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
    ]
  
  return (
    <>
      <Nav />
      <Carousel images={images}/>
    </>
  )
}
export default App
