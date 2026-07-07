import type { CruiseAttentionGrabber } from "../../../types/types";

const CruiseType = (cruise: CruiseAttentionGrabber) => {
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
              btn btn-primary
              bg-gold
              border-2 border-transparent
              px-4 py-2
              gap-2
              rounded-md
              font-semibold
              cursor-pointer

              hover:bg-gold-hover
              active:bg-gold-hover/90
              active:border-text-primary
              active:scale-[1.02]

              transition-all duration-200
            "
          >
            {cruise.icon && <cruise.icon className="text-xl"/>}
            {cruise.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CruiseType;