import { FaSailboat } from "react-icons/fa6";

const CarouselTextSection = () => {
    return (
        <div className="absolute h-s max-w-[30%]  z-1000  justify-center flex-col
                    top-[25%] left-4 gap-2 flex p-2 rounded-2xl"
        >

            <h3 className="text-gold font-bold uppercase">Experience</h3>
            <h1 className="text-4xl text-primary font-bold mb-2">Luxury Elevated </h1>
            <p className="text-text-primary/90">Bespoke yachting experiences crafted with elegance, precision and unmatched service.</p>

            <div className="flex max-w-[70%] text-text-primary">
                <button className="bg-gold font-semibold flex items-center justify-center cursor-pointer
                                  border-2 border-transparent
    
                                  px-4 py-2 gap-2 rounded-md mt-4 w-full
                                
                                  hover:bg-gold-hover active:border-text-primary active:bg-gold-hover/90
              transition-colors duration-300">
                    Explore <FaSailboat />
                </button>

            </div>
        </div>
    )
}

export default CarouselTextSection
