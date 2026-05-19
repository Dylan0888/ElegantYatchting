import React, { useEffect, useMemo, useRef, useState } from "react";
import YachtCard from "./YachtCard";
import { yachtList } from "../../../assets/YachtList";
import type { YachtCarouselLayout } from "../../../types/types";
import FleetNavigation from "./FleetNavigation";

const YachtFleetCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  const touchStartX = useRef<number | null>(null);

  // Responsive cards per slide
  useEffect(() => {
    const updateCardsPerSlide = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerSlide(3); // desktop
      } else if (window.innerWidth >= 768) {
        setCardsPerSlide(2); // tablet
      } else {
        setCardsPerSlide(1); // mobile
      }
    };

    updateCardsPerSlide();

    window.addEventListener("resize", updateCardsPerSlide);

    return () => {
      window.removeEventListener("resize", updateCardsPerSlide);
    };
  }, []);

  // Dynamically create slides
  const yachtCarouselLayout: YachtCarouselLayout = useMemo(() => {
    const slides = [];

    for (let i = 0; i < yachtList.length; i += cardsPerSlide) {
      slides.push(yachtList.slice(i, i + cardsPerSlide));
    }

    return slides;
  }, [cardsPerSlide]);

  // Reset index if layout changes
  useEffect(() => {
    if (currentIndex >= yachtCarouselLayout.length) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setCurrentIndex(0);
    }
  }, [cardsPerSlide, currentIndex, yachtCarouselLayout.length]);

  // Navigation handlers
  const goLeft = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? yachtCarouselLayout.length - 1 : prevIndex - 1,
    );
  };

  const goRight = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === yachtCarouselLayout.length - 1 ? 0 : prevIndex + 1,
    );
  };

  // Touch event handlers
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

  return (
    <section className="px-4 my-4">
        <h3 className="text-gold font-bold uppercase">Experience</h3>
      <div
        className="relative w-full overflow-hidden "
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
        <FleetNavigation direction={"left"} moveFunction={goLeft} />
        <FleetNavigation direction={"right"} moveFunction={goRight} />

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
    </section>
  );
};

export default YachtFleetCarousel;
