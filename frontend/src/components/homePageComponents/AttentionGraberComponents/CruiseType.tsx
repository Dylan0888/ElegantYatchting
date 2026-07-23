import type { CruiseAttentionGrabber } from "../../../types/types";
import type { StringToIcon } from "../../../types/types"

interface props {
  cruise: CruiseAttentionGrabber,
  icons: StringToIcon
}

const CruiseType = ({cruise,icons}: props) => {
  const Icon = icons[cruise.icon]

  return (
    <div
      className="
        card
        bg-base-100
        image-full
        rounded-2xl
        shadow-sm

        w-full
        max-w-md
        lg:max-w-lg
        xl:max-w-xl

        min-h-105

        flex-1
        overflow-hidden
      "
    >
      <figure>
        <img
          src={cruise.image}
          alt={cruise.title}
          className="h-full w-full object-cover"
        />
      </figure>

      <div className="card-body justify-between">
        <div>
          <h2 className="card-title font-elegant text-gold tracking-widest text-2xl md:text-3xl">
            {cruise.title}
          </h2>

          <p className="mt-2 text-text-secondary text-sm md:text-base">
            {cruise.description}
          </p>
        </div>

        <div className="card-actions justify-start">
          <button
            className="
              btn-primary-custom
            "
          >
            <Icon className="text-xl"/>
            {cruise.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CruiseType;