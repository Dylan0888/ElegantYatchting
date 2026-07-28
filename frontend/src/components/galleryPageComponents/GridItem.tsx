import GridIcon from "./GridIcon";
import { FaLocationDot } from "react-icons/fa6";
import { MdCalendarMonth } from "react-icons/md";
import type {GalleryItemStructure} from '../../types/types'
export interface GalleryProps {
    key: number
    data: GalleryItemStructure
}

const GridItem = ({ data }: GalleryProps) => {
    return (
        <article
            className=" group
                        w-75
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
                    " >
            {/* Image */}

            <div className="relative overflow-hidden">
                <img
                    src={data.img.src}
                    alt={data.img.alt}
                    className=" h-80
                                w-full
                                object-cover
                                transition-transform
                                duration-700
                                group-hover:scale-110
                            " />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/30" />

            </div>

            {/* Footer */}

            <div className="space-y-4 p-5">
                <h3 className=" text-xl 
                                tracking-[0.2em] 
                                font-elegant 
                                font-semibold        
                                text-text-primary 
                                text-center
                            ">
                    {data.title}
                </h3>

                <div className="flex justify-between text-sm text-text-secondary">
                    <GridIcon Icon={FaLocationDot} text={data.location} />

                    <GridIcon Icon={MdCalendarMonth} text={data.date} />
                </div>
            </div>
        </article>
    );
};

export default GridItem;