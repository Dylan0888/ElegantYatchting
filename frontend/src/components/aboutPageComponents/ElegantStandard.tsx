import { features } from "../../assets/data/about/elgStandData"
import ESFeature from "./ESFeature";
const ElegantStandard = () => {


  return (
    <section className=" pt-15 pb-10">

      <div className="mx-auto max-w-7xl px-8">

        <h2 className="text-center text-5xl font-elegant tracking-[0.2em]">
          The Elegant Standard
        </h2>

        <div className="mx-auto mt-6 h-0.5 w-20 bg-gold" />

        <div className="mt-10 grid gap-12 md:grid-cols-5">
          {features.map((feature) =>
            <ESFeature {...feature} />
          )}
        </div>

      </div>

    </section>
  )
}

export default ElegantStandard
