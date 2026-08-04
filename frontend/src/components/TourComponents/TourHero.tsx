import React from 'react'

const TourHero = () => {
  return (
     <div className="my-15 text-center items-center flex flex-col">
          <p className="font-elegant text-4xl text-gold">
            Discover Our Collection
          </p>

          {/* Decorative Divider */}

            <div className="mb-4 h-px w-28 bg-linear-to-r from-transparent via-gold to-transparent" />

          <h2 className="mt-4 text-5xl font-bold text-text-primary">
            Luxury Tours & Experiences
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-text-secondary">
            Every journey is carefully curated to deliver exceptional
            destinations, world-class service and unforgettable memories across
            the globe's most spectacular waters.
          </p>
        </div>
  )
}

export default TourHero
