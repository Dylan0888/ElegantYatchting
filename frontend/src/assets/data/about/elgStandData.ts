import { IoBoatOutline } from "react-icons/io5";
import { FaRegGem } from "react-icons/fa";
import { SiWorldhealthorganization } from "react-icons/si";
import { FaHandHoldingMedical } from "react-icons/fa";
import { MdOutlineHealthAndSafety }  from "react-icons/md";
import type { aboutFeatures } from "../../../types/aboutTypes";

export const features: aboutFeatures[] = [
    {
        icon: IoBoatOutline,
        title: "Bespoke Experiences",
        text: "Private charters tailored around you."
    },
    {
        icon: FaRegGem,
        title: "Luxury Fleet",
        text: "Exceptional yachts maintained impeccably."
    },
    {
        icon: SiWorldhealthorganization,
        title: "Professional Crew",
        text: "World-class hospitality throughout."
    },
    {
        icon: FaHandHoldingMedical,
        title: "Seamless Planning",
        text: "Every detail expertly arranged."
    },
    {
        icon: MdOutlineHealthAndSafety,
        title: "Privacy & Safety",
        text: "Your comfort is our highest priority."
    }
];