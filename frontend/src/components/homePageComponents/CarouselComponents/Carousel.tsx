import { useState, useRef, useEffect } from "react";
import type { ImageStructure } from "../../../types/types";
import CarouselTextSection from "./CarouselTextSection";

interface CarouselProps {
  images: ImageStructure[];
}

const Carousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

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
      className="relative w-full h-100 md:h-125 lg:h-150 xl:h-170 mx-auto mt-8
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
      <div
        className="pointer-events-none absolute inset-0 rounded-t-lg"

        style={{
          background: `
      linear-gradient(
        to right,
        rgba(5, 10, 20, 0.88) 0%,
        rgba(5, 10, 20, 0.72) 22%,
        rgba(5, 10, 20, 0.45) 40%,
        rgba(5, 10, 20, 0.12) 60%,
        rgba(5, 10, 20, 0) 100%
      ),

      linear-gradient(
        to top,
        rgba(0,0,0,0.55) 0%,
        rgba(0,0,0,0.18) 30%,
        rgba(0,0,0,0) 55%
      ),

      linear-gradient(
        to bottom,
        rgba(0,0,0,0.30) 0%,
        rgba(0,0,0,0) 20%
      )
    `,
        }}
      />









      {/* Left Button */}
      <button
        onClick={goLeft}
        className="absolute left-0 top-0 h-full w-[8%]
                   flex items-center justify-center
                   bg-gray-700/40 text-white text-2xl
                   backdrop-blur-sm border border-black/60
                   rounded-l-lg
                   opacity-0 hover:opacity-100
                   transition-all duration-300
                   hover:shadow-[8px_0_20px_rgba(0,0,0,0.5)]"
      >
        ❮
      </button>

      {/* Right Button */}
      <button
        onClick={goRight}
        className="absolute right-0 top-0 h-full w-[8%]
                   flex items-center justify-center
                   bg-gray-700/40 text-white text-2xl
                   backdrop-blur-sm border border-black/60
                   rounded-r-lg
                   opacity-0 hover:opacity-100
                   transition-all duration-300
                   hover:shadow-[-8px_0_20px_rgba(0,0,0,0.5)]"
      >
        ❯
      </button>

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