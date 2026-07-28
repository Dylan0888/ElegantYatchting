const GalleryHero = () => {
  return (
    <section className="mx-auto flex max-w-5xl flex-col items-center px-6 py-5 text-center">

      {/* Main Title */}

      <h1 className="mb-4 text-4xl font-bold text-gold md:text-5xl lg:text-6xl">
        Gallery
      </h1>

      {/* Decorative Divider */}

      <div className="mb-4 h-px w-28 bg-linear-to-r from-transparent via-gold to-transparent" />

      {/* Description */}

      <p className="max-w-3xl text-lg leading-7 text-text-secondary md:text-xl">
        <span className="font-semibold text-text-primary">
          Where exceptional yachts meet extraordinary destinations.
        </span>
        <br />
        <br />
        Browse a curated collection showcasing breathtaking landscapes,
        elegant vessels, and moments of pure indulgence captured from voyages
        across the world's most beautiful waters.
      </p>
    </section>
  );
};

export default GalleryHero;