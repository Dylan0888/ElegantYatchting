import type {CruiseAttentionGrabber} from '../types/types'
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { TbRating18Plus } from "react-icons/tb";
import adultOnly from '../assets/imgs/adult-Only.jpg'
import luxuryFamily from '../assets/imgs/luxury-family.jpg'

export const cruiseAttentionGrabbers: CruiseAttentionGrabber[] = [
    {
        title: "Luxury Family Cruises",  
        description: "Experience the ultimate in luxury and comfort with our family-friendly cruises. Enjoy spacious accommodations, gourmet dining, and a variety of activities for all ages.",
        image: luxuryFamily,
        icon: MdOutlineFamilyRestroom 
    },
    {
        title: "Sophisticated Adult Only Cruises",  
        description: "Indulge in a sophisticated and relaxing experience with our adult-only cruises. Enjoy fine dining, entertainment, and activities designed for adults seeking a serene getaway.",
        image: adultOnly,
        icon: TbRating18Plus
    },
]







