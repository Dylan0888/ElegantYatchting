import data from "../../assets/data/about/PAData.json";
import type { personalApproachProps } from "../../types/aboutTypes";

const PersonalApproach = () => {
  const pa: personalApproachProps = data;

  return (
    <section className="bg-white py-15 ">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-15 px-8 lg:grid-cols-2">
        <img
          className="h-137.5 w-full rounded object-cover"
          src={pa.img.src}
          alt={pa.img.alt}
        />

        <div className="flex flex-col justify-center transition-all duration-150">
          <span className="uppercase tracking-[0.4em] text-gold">
            {pa.subHeading}
          </span>

          <h2 className="sm:mt-3 mt-5 text-5xl font-light leading-normal text-slate-900">
            {pa.heading}
          </h2>

          <div className="sm:mt-4 mt-8 h-0.5 w-20 bg-gold" />

          <p className="sm:mt-4 mt-8 text-lg leading-8 text-slate-700">
            {pa.para1}
          </p>

          <p className="sm:mt-3 mt-6 text-lg leading-8 text-slate-700">
            {pa.para2}
          </p>
        </div>
      </div>
    </section>
  );
};

export default PersonalApproach;
