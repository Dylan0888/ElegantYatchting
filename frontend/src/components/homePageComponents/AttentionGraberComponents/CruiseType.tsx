import type { CruiseAttentionGrabber } from '../../../types/types'

const CruiseType = (cruise: CruiseAttentionGrabber) => {

    return (
        <div className="card bg-base-100 image-full rounded-2xl shadow-sm grow max-w-120 h-90">
            <figure>
                <img
                    src={cruise.image} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{cruise.title}</h2>
                <p>{cruise.description}</p>

                <div className="card-actions justify-start ">
                    <button className="btn btn-primary bg-gold font-semibold flex       cursor-pointer border-2 border-transparent
                    px-4 py-2 gap-2 rounded-md mt-4 
                   hover:bg-gold-hover active:border-text-primary active:bg-gold-hover/90
                    active:scale-102
                    transition-all duration-200">
                        {cruise.buttonText}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CruiseType
