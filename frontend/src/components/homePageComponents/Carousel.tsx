import React from "react";

interface CarouselProps {
  images: string[];
}

const Carousel = ({ images }: CarouselProps) => {
  return (
    <>
      <div className="carousel w-full">
        {images.map((src, index) => (
          <div
            key={index}
            id={`item${index + 1}`}
            className="carousel-item w-full"
          >
            <img src={src} className="w-full" />
          </div>
        ))}
      </div>

      <div className="flex w-full justify-center gap-2 py-2">
        {images.map((_, index) => (
          <a key={index} href={`#item${index + 1}`} className="btn btn-xs">
            {index + 1}
          </a>
        ))}
      </div>
    </>
  );
};

export default Carousel;
