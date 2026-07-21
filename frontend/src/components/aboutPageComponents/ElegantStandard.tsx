import { features } from "../../assets/data/about/elgStandData"
const ElegantStandard = () => {


  return (
    <section className=" pt-15 pb-10">

      <div className="mx-auto max-w-7xl px-8">

        <h2 className="text-center text-5xl font-elegant tracking-[0.2em]">
          The Elegant Standard
        </h2>

        <div className="mx-auto mt-6 h-0.5 w-20 bg-gold" />

        <div className="mt-10 grid gap-12 md:grid-cols-5">

          {features.map((feature) => {

            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="text-center group px-2 py-5 rounded-2xl hover:shadow-2xl hover:bg-secondary-bg  
                                transition-all duration-200"
              >
                <Icon
                  size={42}
                  className="mx-auto text-gold-hover group-hover:text-gold group-hover:scale-110  duration-300"
                />

                <h3 className="mt-5 font-semibold uppercase tracking-wide text-text-primary">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-text-secondary">
                  {feature.text}
                </p>

              </div>
            );

          })}

        </div>

      </div>

    </section>
  )
}

export default ElegantStandard
