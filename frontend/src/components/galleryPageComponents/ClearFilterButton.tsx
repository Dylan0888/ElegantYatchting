import React from 'react'
import type { filters } from '../../types/galleryTypes'

interface props {
    setFilters: React.Dispatch<React.SetStateAction<filters>>
}

const ClearFilterButton = ({ setFilters }: props) => {

    return (
        <button className=" 
                rounded-lg 
                bg-gold 
                px-4 
                py-2 
                text-gray-800 
                hover:bg-gold-hover
                hover:text-primary
                cursor-pointer
                transition-all
                duration-300
                ease-in-out
                " 
            onClick={() => setFilters({ location: "", date: "", tags: "" })}>
            Clear Filters
        </button>
    )
}

export default ClearFilterButton
