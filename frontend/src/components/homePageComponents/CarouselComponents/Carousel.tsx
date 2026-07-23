import { useState, useRef, useEffect } from "react";
import type { ImageStructure } from "../../../types/types";
import CarouselTextSection from "./CarouselTextSection";
import Gradient from "./Gradient";
import CarouselButtons from "./CarouselButtons";
import carouselImages from '../../../assets/data/home/carouselSet.json'

const Carousel = () => {
  // Loads the json file
  const images: ImageStructure[] = carouselImages 
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  // Navigation Functions 
  const goLeft = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const goRight = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  //  Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const diff = e.changedTouches[0].clientX - touchStartX.current;

    if (diff > 50) goLeft();
    if (diff < -50) goRight();

    touchStartX.current = null;
  };


  //  Auto-slide
  useEffect(() => {
    const interval = setInterval(goRight, 15000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div
      className="relative w-full h-100 md:h-125 lg:h-150 xl:h-170 mx-auto mt-4
                 overflow-hidden rounded-t-lg
                 bg-gray-800/20 backdrop-blur-xs border border-gray-700/50"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Sliding Track */}
      <div className="overflow-hidden rounded-t-lg">
        <div
          className="flex transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <picture key={index} className="w-full shrink-0">
              {/* Mobile (small image) */}
              {img.smallImg && (
                <source
                  media="(max-width: 768px)"
                  srcSet={img.smallImg}
                />
              )}

              {/* Desktop (large image fallback) */}
              <img
                src={img.largeImg || img.smallImg || ""}
                className="w-full h-full object-cover"
                alt={img.alt || `Slide ${index}`}
              />
            </picture>
          ))}
        </div>
      </div>


      {/*Carousel Text */}
      <CarouselTextSection />



      {/* Gradient Overlay */}
      <Gradient />

      {/* Navigation Buttons */}
      <CarouselButtons direction={"left"} moveFunction={goLeft} />
      <CarouselButtons direction={"right"} moveFunction={goRight} />

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 
                flex items-center gap-2 
                bg-black/30 backdrop-blur-md 
                px-3 py-1.5 rounded-full">

        {images.map((_, index) => (
          <div
            key={index}
            className={`transition-all duration-300 ease-in-out
              ${index === currentIndex
                ? "w-6 h-2 bg-white rounded-full"
                : "w-2 h-2 bg-white/60 rounded-full"}
            `}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;