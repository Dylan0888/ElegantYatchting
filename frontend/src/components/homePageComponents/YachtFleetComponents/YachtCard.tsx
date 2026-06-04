import { FaSailboat } from "react-icons/fa6";
import { PiPersonSimpleSwimBold } from "react-icons/pi";
import { BsPersonFill } from "react-icons/bs";
import type { Yacht } from '../../../types/types'

const YachtCard = ({ name, status, description, image, numGuests, numCrew, length, alt }: Yacht) => {
    return (
        <div className="card bg-base-100  rounded-2xl cursor-pointer shadow-4xl ">
            <figure>
                <img
                    src={image}
                    alt={alt} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name}

                    {status === "NEW" && <div className="badge badge-secondary px-1 rounded-md bg-gold text-text-primary">NEW</div>}

                </h2>
                <p className='text-text-secondary'>{description}</p>
                <div className="card-actions justify-between text-text-secondary">
                    <div className="badge badge-outline">
                        <FaSailboat className='text-gold' />{length}m
                    </div>
                    <div className="badge badge-outline">
                        <BsPersonFill className='text-gold' />{numGuests} Guests
                    </div>
                    <div className="badge badge-outline">
                        <PiPersonSimpleSwimBold className='text-gold' />{numCrew} Crew
                    </div>
                </div>
            </div>
        </div>
    )
}

export default YachtCard
