import CarouselFooterFeature from "./CarouselFooterFeature";
import { PiCompassRose, PiAnchor } from "react-icons/pi";
import { GiFlowerStar, GiEarthAsiaOceania } from "react-icons/gi";
import type { CarouselFeature } from "../../types/types";


const CarouselFooter = () => {


    const features: CarouselFeature[] = [
        {
            icon: PiAnchor,
            heading: "Premium Yachts",
            text: "Handpicked luxury vessels worldwide"
        },
        {
            icon: PiCompassRose,
            heading: "Tailored Experience",
            text: "Custom itineraries just for you"
        },
        {
            icon: GiFlowerStar,
            heading: "Expert Crew",
            text: "Professional discreet and dedicated"
        },
        {
            icon: GiEarthAsiaOceania,
            heading: "Exclusive Destinations",
            text: "The worlds most breathtaking locations"
        }
    ]


    return (
        <section className="bg-[var(--color-secondary-bg)] 
                    grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 
                    gap-6 px-4 py-8">

            {features.map((feature, index) => (
                <CarouselFooterFeature key={index} icon={feature.icon} heading={feature.heading} text={feature.text} />
            ))}

        </section>
    )
}

export default CarouselFooter
