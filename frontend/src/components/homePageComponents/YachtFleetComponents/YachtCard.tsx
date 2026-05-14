import React from 'react'
import { FaSailboat } from "react-icons/fa6";
import { PiPersonSimpleSwimBold } from "react-icons/pi";
import { BsPersonFill } from "react-icons/bs";

const YachtCard = () => {
    return (
        <div className="card bg-base-100 w-96 shadow-sm border border-text-secondary rounded-md cursor-pointer hover:shadow-lg transition-shadow duration-300">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    Yacht Name
                    <div className="badge badge-secondary px-1 rounded-md bg-gold text-text-primary">NEW</div>
                </h2>
                <p className='text-text-secondary'>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-between text-text-secondary">
                    <div className="badge badge-outline">
                        <FaSailboat className='text-gold' />100m
                    </div>
                    <div className="badge badge-outline">
                        <BsPersonFill className='text-gold' />10 Guests
                    </div>
                    <div className="badge badge-outline">
                        <PiPersonSimpleSwimBold className='text-gold' />100 Crew
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YachtCard
