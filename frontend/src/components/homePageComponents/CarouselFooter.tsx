import { PiCompassRose, PiAnchor } from "react-icons/pi";
import { GiFlowerStar, GiEarthAsiaOceania } from "react-icons/gi";
import type { IconType } from "react-icons";


const CarouselFooter = () => {

    interface feature  {
        icon: IconType,
        heading: string,
        text:string
    }

    const features: feature[] = [

        {
            icon: PiAnchor,
            heading: "Premium Yachts",
            text: "Handpicked luxury vessels worldwide"
        },

        {
            
        }






    ]




    return (
        <section className="bg-[var(--color-secondary-bg)] 
                    grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
                    gap-6 px-4 py-8">

            <div className="flex flex-col items-center text-center gap-2">
                <PiAnchor className="text-3xl md:text-4xl text-[var(--color-gold)]" />
                <h4 className="text-[var(--color-text-primary)] font-semibold text-lg">
                    Premium Yachts
                </h4>
                <p className="text-[var(--color-text-secondary)] text-sm md:text-base max-w-xs">
                    Handpicked luxury vessels worldwide
                </p>
            </div>

            <div className="flex flex-col items-center text-center gap-2">
                <PiCompassRose className="text-3xl md:text-4xl text-[var(--color-gold)]" />
                <h4 className="text-[var(--color-text-primary)] font-semibold text-lg">
                    Tailored Experience
                </h4>
                <p className="text-[var(--color-text-secondary)] text-sm md:text-base max-w-xs">
                    Custom itineraries just for you
                </p>
            </div>

            <div className="flex flex-col items-center text-center gap-2">
                <GiFlowerStar className="text-3xl md:text-4xl text-[var(--color-gold)]" />
                <h4 className="text-[var(--color-text-primary)] font-semibold text-lg">
                    Expert Crew
                </h4>
                <p className="text-[var(--color-text-secondary)] text-sm md:text-base max-w-xs">
                    Professional discreet and dedicated
                </p>
            </div>

            <div className="flex flex-col items-center text-center gap-2">
                <GiEarthAsiaOceania className="text-3xl md:text-4xl text-[var(--color-gold)]" />
                <h4 className="text-[var(--color-text-primary)] font-semibold text-lg">
                    Exclusive Destinations
                </h4>
                <p className="text-[var(--color-text-secondary)] text-sm md:text-base max-w-xs">
                    The worlds most breathtaking locations
                </p>
            </div>

        </section>
    )
}

export default CarouselFooter
