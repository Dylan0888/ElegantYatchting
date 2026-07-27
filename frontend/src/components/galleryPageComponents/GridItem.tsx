import React from 'react'
import GridIcon from './GridIcon';

import { FaLocationDot } from "react-icons/fa6";
import { MdCalendarMonth } from "react-icons/md";

const GridItem = () => {

    // each item should have :
    // image src + alt

    // -- These will be filterable --
    // date taken 
    // location taken 
    // filter tags 

  

    return (
        <div tabIndex={0} className="card flex border-1 shadow-lg  w-80 md:w-90 md:border-red-400 lg:w-100 lg:border-amber-200">
            <figure className='object-cover'>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    alt="Movie" />
            </figure>
            <div className="  h-8 text-sm  ">
                <div className='flex justify-evenly p-1'>
                    <GridIcon Icon={FaLocationDot} text={"New Zealand"}/>
                    <GridIcon Icon={MdCalendarMonth} text={"18/20/2018"}/>         
                </div>

            </div>
        </div>
    )
}

export default GridItem
