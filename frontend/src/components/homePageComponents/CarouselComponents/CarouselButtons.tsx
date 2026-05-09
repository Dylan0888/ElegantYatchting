import React from 'react'


const buttons = {
    left:
        <button
            onClick={goLeft}
            className="absolute left-0 top-0 h-full w-[8%]
                   flex items-center justify-center
                   bg-gray-700/40 text-white text-2xl
                   backdrop-blur-sm border border-black/60
                   rounded-l-lg
                   opacity-0 hover:opacity-100
                   transition-all duration-300
                   hover:shadow-[8px_0_20px_rgba(0,0,0,0.5)]"
        >
            ❮
        </button>
    ,
    right:
        <button
            onClick={goRight}
            className="absolute right-0 top-0 h-full w-[8%]
                   flex items-center justify-center
                   bg-gray-700/40 text-white text-2xl
                   backdrop-blur-sm border border-black/60
                   rounded-r-lg
                   opacity-0 hover:opacity-100
                   transition-all duration-300
                   hover:shadow-[-8px_0_20px_rgba(0,0,0,0.5)]"
        >
            ❯
        </button>
}







const CarouselButtons = () => {
    return (
        <div>

        </div>
    )
}

export default CarouselButtons
