import { useState } from "react";

interface CarouselProps {
  images: string[];
}

const Carousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goLeft = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goRight = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full ">
      {/* Image */}
      <div className="w-full rounded-2xl overflow-hidden">
        <img
          src={images[currentIndex]}
          className="w-full"
          alt={`Slide ${currentIndex}`}
        />
      </div>

      {/* Left Button */}
      <button
        onClick={goLeft}
        className="absolute left-0 top-0 h-full w-[10%] cursor-pointer
             flex items-center justify-center
             bg-gray-700/40 text-white text-2xl rounded-2xl backdrop-blur-sm
             border border-black/60
             opacity-0 hover:opacity-100 
             transition-all duration-300
             hover:shadow-[8px_0_15px_rgba(0,0,0,0.4)]"
      >
        ❮
      </button>

      {/* Right Button */}
      <button
        onClick={goLeft}
        className="absolute left-0 top-0 h-full w-[10%] cursor-pointer
             flex items-center justify-center
             bg-gray-700/40 text-white text-2xl rounded-2xl backdrop-blur-sm
             border border-black/60
             opacity-0 hover:opacity-100 
             transition-all duration-300
             hover:shadow-[8px_0_15px_rgba(0,0,0,0.4)]"
      >
        ❮
      </button>

      {/* Right Button */}
      <button
        onClick={goRight}
        className="absolute right-0 top-0 h-full w-[10%] cursor-pointer
             flex items-center justify-center
             bg-gray-700/40 text-white text-2xl rounded-2xl backdrop-blur-sm
             border border-black/60
             opacity-0 hover:opacity-100 
             transition-all duration-300
             hover:shadow-[-8px_0_15px_rgba(0,0,0,0.4)]"
      >
        ❯
      </button>
    </div>
  );
};

export default Carousel;
