import React from 'react'
import data from "../../assets/data/about/heroSectionData.json"
import type { heroData } from '../../types/aboutTypes';


const HeroSection = () => {

    const hd: heroData = data; 

    return (
        <section className="relative h-[70vh] overflow-hidden capitalize">
            <img
                src={hd.img}
                className="absolute inset-0 h-full w-full object-cover"
                alt=""
            />

            <div className="absolute inset-0 bg-black/55" />

            <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-8">
                <div className="max-w-2xl text-white">
                    <span className="uppercase tracking-[0.2em] text-sm text-gold">
                        {hd.page}
                    </span>

                    <h1 className="mt-6 text-6xl font-light text-text-primary leading-tight md:text-7xl">
                        {hd.primHead}
                        <br />
                        <span className="text-gold">
                            {hd.secHead}
                        </span>
                    </h1>

                    <p className="mt-8 text-lg leading-8 text-text-secondary">
                        {hd.desc}
                    </p>
                </div>
            </div>
        </section>
    )
}
export default HeroSection
