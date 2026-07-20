import CruiseType from "./CruiseType"
import { cruiseAttentionGrabbers }  from "../../../assets/data/CruiseAttentionList"

const AttentionGrid = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center my-10 mx-5 
                    sm:items-center gap-10 lg:gap-20 xl:gap-30 ">
            {cruiseAttentionGrabbers.map((cruise, index) => (
                <CruiseType key={index} {...cruise} />
            ))}

        </div>
    )
}

export default AttentionGrid
