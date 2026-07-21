import data from "../../assets/data/about/callToActionData.json";
import type { ctaProps } from "../../types/aboutTypes";

const LuxuryCTA = () => {
  const cta: ctaProps = data;
  return (
    <section
      className="relative overflow-hidden py-28 
      min-h-[70vh] lg:min-h-[80vh] 2xl:min-h-screen "
    >
      <img
        src={cta.img.src}
        className="absolute inset-0 h-full w-full object-cover"
        alt={cta.img.alt}
      />

      <div className="absolute inset-0 bg-black/60" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-start px-8 text-white">
        <span className="uppercase tracking-[0.4em] text-gold">
          {cta.headings.head}
        </span>

        <h2 className="mt-6 max-w-3xl text-5xl font-light leading-tight text-primary">
          {cta.headings.sub}
        </h2>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-text-secondary">
          {cta.para}
        </p>

        <button className="btn-primary-custom mt-12 px-8 py-3 tracking-widest text-xl ">
          {cta.buttonText}
        </button>
      </div>
    </section>
  );
};

export default LuxuryCTA;
