import GridIcon from "./GridIcon";

import { FaLocationDot } from "react-icons/fa6";
import { MdCalendarMonth } from "react-icons/md";

const GridItem = () => {
    return (
        <article
            className="
        group
        w-70
        overflow-hidden
        rounded-xl
        border-2
        border-border
        bg-secondary-bg
        shadow-xl
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-gold
        hover:shadow-2xl
      "
        >
            {/* Image */}

            <div className="relative overflow-hidden">
                <img
                    src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                    alt="Luxury yacht cruising through New Zealand"
                    className="
            h-80
            w-full
            object-cover
            transition-transform
            duration-700
            group-hover:scale-110
          "
                />

                {/* Dark overlay */}

                <div className="absolute inset-0 bg-black/30"/>

                {/* Tags */}

                {/* <div className="absolute left-4 top-4 flex gap-2">
          <span className="rounded-full bg-black/50 px-3 py-1 text-xs text-white backdrop-blur-md">
            Scenic
          </span>

          <span className="rounded-full bg-gold px-3 py-1 text-xs font-medium text-bg">
            Luxury
          </span>
        </div> */}
            </div>

            {/* Footer */}

            <div className="space-y-4 p-5">
                <h3 className="text-lg font-semibold text-text-primary">
                    Milford Sound
                </h3>

                <div className="flex justify-between text-sm text-text-secondary">
                    <GridIcon Icon={FaLocationDot} text="New Zealand" />

                    <GridIcon Icon={MdCalendarMonth} text="18 May 2026" />
                </div>
            </div>
        </article>
    );
};

export default GridItem;