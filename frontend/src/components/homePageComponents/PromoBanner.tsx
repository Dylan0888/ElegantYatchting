import { promoDetails } from '../../assets/promoBannerInfo'

const PromoBanner = () => {
    return (
        <div
            className="relative flex items-center overflow-hidden
                    h-60 md:h-90 lg:h-120
                    rounded-3xl shadow-lg
                    mx-3 my-3" 
                    
            style={{
                backgroundImage: `url(${promoDetails.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/55" />

            {/* Content */}
            <div className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10">
                <div className="max-w-lg">
                    <h1 className="mb-4 text-3xl text-gold font-bold  md:text-5xl">
                        {promoDetails.title}
                    </h1>

                    <p className="mb-6 text-base text-text-secondary md:text-lg">
                        {promoDetails.description}
                    </p>

                    <button className="btn-primary-custom">
                        {promoDetails.buttonText}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PromoBanner



