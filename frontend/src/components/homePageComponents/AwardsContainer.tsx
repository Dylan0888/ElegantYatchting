import Award from './Award'
import { awardList } from '../../assets/AwardsList'

const AwardsContainer = () => {

    return (
        <section className="relative overflow-hidden bg-bg py-20">

            {/* Background Blend */}
            <div className="absolute inset-0 bg-linear-to-b from-bg via-secondary-bg to-bg" />

            {/* Subtle Teal Glow */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(47,164,169,0.08),transparent_75%)]" />

            {/* Left Fade */}
            <div
                className="
                pointer-events-none
                absolute left-0 top-0 z-20 h-full
                w-12 sm:w-16 md:w-24 lg:w-32 xl:w-40
                bg-linear-to-r from-bg via-bg/80 to-transparent
                "
            />

            {/* Right Fade */}
            <div
                className="
                    pointer-events-none
                    absolute right-0 top-0 z-20 h-full
                    w-12 sm:w-16 md:w-24 lg:w-32 xl:w-40
                    bg-linear-to-l from-bg via-bg/80 to-transparent
                "
            />

            <div className="relative z-10 mx-auto max-w-7xl px-6">

                {/* Heading */}
                <div className="mb-14 text-center">
                    <span className="inline-block rounded-full border border-gold/30 bg-gold/10 px-4 py-1 text-sm font-medium tracking-wider uppercase text-gold">
                        Trusted Excellence
                    </span>

                    <h2 className="mt-4 font-bold text-text-primary sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl transition-text duration-300 ease-in-out">
                        Awards & Recognition
                    </h2>

                    {/* Underlined Heading  */}
                    <div className="mx-auto mt-4 h-1 w-44 rounded-full bg-teal" />

                    <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-text-secondary sm:text-lg md:text-xl lg:text-2xl  transition-text duration-300 ease-in-out">
                        Our dedication to craftsmanship, innovation and customer
                        service has earned recognition from leading organizations
                        across the industry.
                    </p>
                </div>

            </div>

            {/* Marquee */}
            <div className="overflow-hidden w-screen">
                <ul className="flex w-max gap-8 animate-infinite-scroll ">
                    {[...awardList, ...awardList, ...awardList].map(
                        (award, index) => (
                            <li
                                key={index}
                                className="shrink-0 w-40 sm:w-44 md:w-52 lg:w-58 xl:w-64"
                            >
                                <Award {...award} />
                            </li>
                        )
                    )}
                </ul>
            </div>

        </section>
    )
}

export default AwardsContainer
