import React from 'react'
import type { aboutFeatures } from '../../types/aboutTypes'

const ESFeature = (feature: aboutFeatures) => {
    const Icon = feature.icon
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
    )
}

export default ESFeature
