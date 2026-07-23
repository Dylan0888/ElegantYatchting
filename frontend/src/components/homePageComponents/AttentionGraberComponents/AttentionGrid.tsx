import CruiseType from "./CruiseType"
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { TbRating18Plus } from "react-icons/tb";
import attentionList from "../../../assets/data/home/cruiseAttentionList.json"
import type { StringToIcon } from "../../../types/types"

const AttentionGrid = () => {

    const icons: StringToIcon = {
        MdOutlineFamilyRestroom,
        TbRating18Plus
    }

    return (
        <div className="flex flex-col md:flex-row justify-center my-10 mx-5 
                    sm:items-center gap-10 lg:gap-20 xl:gap-30 ">
            {attentionList.map((cruise, index) => (
                <CruiseType key={index} cruise={cruise} icons={icons}/>
            ))}

        </div>
    )
}

export default AttentionGrid
