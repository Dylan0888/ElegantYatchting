import React from 'react'
import YachtCard from './YachtCard'
import { yachtList } from '../../../assets/YachtList'
import type { yachtCarouselLayout } from '../../../types/types'

const YachtFleetCarousel = () => {
  
  const yachtCarouselLayout: yachtCarouselLayout = [
    [yachtList[0], yachtList[1], yachtList[2]], // slide 1
    [yachtList[3], yachtList[4], yachtList[5]], // slide 2
    [yachtList[6], yachtList[7], yachtList[8]], // slide 3
  ]


  // map through yachtCarouselLayout to create carousel slides
  // map through each slide to create carousel items

  return (
    <div className="carousel w-full h-100 border-2 my-10">
  <div id="slide1" className="carousel-item relative w-full ">
      { yachtCarouselLayout.map((slide, slideIndex) => (
         <div key={slideIndex} >
          
          {slide.map((yacht, yachtIndex) => (
            <YachtCard
          key={yachtIndex}
          name={yacht.name}
          status={yacht.status}
          description={yacht.description}
          image={yacht.image}
          numGuests={yacht.numGuests}
          numCrew={yacht.numCrew}
          length={yacht.length}
          alt={yacht.alt}
        />
          ))}
           <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
         </div>
        )
      )

      }
      

  </div>
  
  
  
  
  
  
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
      className="w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
  )
}

export default YachtFleetCarousel


 {yachtList.map((yacht, index) => (
        <YachtCard
          key={index}
          name={yacht.name}
          status={yacht.status}
          description={yacht.description}
          image={yacht.image}
          numGuests={yacht.numGuests}
          numCrew={yacht.numCrew}
          length={yacht.length}
          alt={yacht.alt}
        />
      ))}


      // <a href="#slide4" className="btn btn-circle">❮</a>
      // <a href="#slide2" className="btn btn-circle">❯</a>