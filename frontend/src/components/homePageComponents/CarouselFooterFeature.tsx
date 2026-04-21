import type { CarouselFeature } from '../../types/types'



const CarouselFooterFeature = ({ icon: Icon, heading, text }: CarouselFeature) => {
    return (
        <div className="flex flex-col items-center text-center gap-2">
            <Icon className="text-3xl md:text-4xl text-[var(--color-gold)]" />



            <h4 className="text-[var(--color-text-primary)] font-semibold text-lg">
                {heading}
            </h4>
            <p className="text-[var(--color-text-secondary)] text-sm md:text-base max-w-xs">
                {text}
            </p>
        </div>
    )
}

export default CarouselFooterFeature
