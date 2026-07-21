import ESFeature from "./ESFeature";
import data from "../../assets/data/about/ESData.json"
import { IoBoatOutline } from "react-icons/io5";
import { FaRegGem } from "react-icons/fa";
import { SiWorldhealthorganization } from "react-icons/si";
import { FaHandHoldingMedical } from "react-icons/fa";
import { MdOutlineHealthAndSafety }  from "react-icons/md";
import type { IconType } from "react-icons";

const ElegantStandard = () => {

  const icons: Record<string, IconType> = {
    IoBoatOutline,
    FaRegGem,
    SiWorldhealthorganization,
    FaHandHoldingMedical,
    MdOutlineHealthAndSafety
};


  return (
    <section className=" pt-15 pb-10">

      <div className="mx-auto max-w-7xl px-8">

        <h2 className="text-center text-5xl font-elegant tracking-[0.2em]">
          The Elegant Standard
        </h2>

        <div className="mx-auto mt-6 h-0.5 w-20 bg-gold" />

        <div className="mt-10 grid gap-12 md:grid-cols-5">
          {data.map((feature, index) =>
            <ESFeature key={index} feature={feature} icons={icons} />
          )}
        </div>

      </div>

    </section>
  )
}

export default ElegantStandard
