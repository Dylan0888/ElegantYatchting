import React, { useState, useRef } from 'react'
import YachtCard from './YachtCard'
import { yachtList } from '../../../assets/YachtList'
import type { yachtCarouselLayout } from '../../../types/types'

const YachtFleetCarousel = () => {

  // Groups yachts into slides of 3
  const yachtCarouselLayout: yachtCarouselLayout = [
    [yachtList[0], yachtList[1], yachtList[2]], // slide 1
    [yachtList[3], yachtList[4], yachtList[5]], // slide 2
    [yachtList[6], yachtList[7], yachtList[8]], // slide 3
  ]

  const [currentIndex, setCurentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  // Navigation handlers for touch events
  const goLeft = () => {
    setCurentIndex((prevIndex) => (prevIndex === 0 ? yachtCarouselLayout.length - 1 : prevIndex - 1));
  }

  const goRight = () => {
    setCurentIndex((prevIndex) => (prevIndex === yachtCarouselLayout.length - 1 ? 0 : prevIndex + 1));
  }

  // Touch event handlers for swipe navigation
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const diff = e.changedTouches[0].clientX - touchStartX.current;

    if (diff > 50) goLeft();
    if (diff < -50) goRight();

    touchStartX.current = null;
  };



  return (
    <div
      className="relative w-full overflow-hidden my-10"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Track */}
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {yachtCarouselLayout.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              className="
                min-w-full
                grid
                grid-cols-1
                md:grid-cols-2
                lg:grid-cols-3
                gap-6
                px-4
              "
            >
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
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goLeft}
        className="
          absolute left-4 top-1/2 -translate-y-1/2
          btn btn-circle z-10
        "
      >
        ❮
      </button>

      <button
        onClick={goRight}
        className="
          absolute right-4 top-1/2 -translate-y-1/2
          btn btn-circle z-10
        "
      >
        ❯
      </button>

      {/* Indicators */}
      <div
        className="
          flex justify-center items-center gap-2
          mt-6
        "
      >
        {yachtCarouselLayout.map((_, index) => (
          <div
            key={index}
            className={`
              transition-all duration-300
              ${currentIndex === index
                ? "w-6 h-2 bg-white rounded-full"
                : "w-2 h-2 bg-white/50 rounded-full"
              }
            `}
          />
        ))}
      </div>
    </div>
  )
}

export default YachtFleetCarousel

