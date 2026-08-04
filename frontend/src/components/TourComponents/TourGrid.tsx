import { Link } from "react-router-dom";
import { FaArrowRight, FaLocationDot, FaUsers} from "react-icons/fa6";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { tours } from "../../assets/data/tours";



const TourGrid = () => {
  return (
    <section className="bg-bg px-6 pb-18">
      <div className="mx-auto max-w-7xl">

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {tours.map((tour) => (
            <Link
              key={tour.slug}
              to={`/tours/${tour.slug}`}
              className="
                group
                overflow-hidden
                rounded-3xl
                border
                border-border
                bg-secondary-bg
                shadow-xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-gold
                hover:shadow-2xl
              "
            >
              <div className="overflow-hidden">

                <img
                  src={tour.image}
                  alt={tour.title}
                  className="
                    h-72
                    w-full
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-110
                  "
                />

              </div>

              <div className="space-y-5 p-8">

                <h3 className="text-2xl font-bold text-text-primary group-hover:text-gold">
                  {tour.title}
                </h3>

                <p className="leading-7 text-text-secondary">
                  {tour.description}
                </p>

                <div className="space-y-3 text-sm">

                  <div className="flex items-center gap-3 text-text-secondary">
                    <FaLocationDot className="text-gold" />
                    {tour.location}
                  </div>

                  <div className="flex items-center gap-3 text-text-secondary">
                    <MdOutlineCalendarMonth className="text-gold" />
                    {tour.duration}
                  </div>

                  <div className="flex items-center gap-3 text-text-secondary">
                    <FaUsers className="text-gold" />
                    {tour.type}
                  </div>

                </div>

                <div className="flex items-center gap-2 font-semibold text-gold transition-all group-hover:gap-4">
                  Explore Experience
                  <FaArrowRight />
                </div>

              </div>

            </Link>
          ))}

        </div>
      </div>
    </section>
  );
};

export default TourGrid;