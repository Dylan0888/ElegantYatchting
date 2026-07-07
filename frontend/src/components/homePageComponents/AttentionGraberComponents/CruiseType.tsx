import React from 'react'



const CruiseType = () => {

    return (
        <div className="card bg-base-100 image-full rounded-2xl shadow-sm grow max-w-120 h-90">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">Card Title</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                
                
                
                
                <div className="card-actions justify-start ">
                    <button className="btn btn-primary bg-gold font-semibold flex       cursor-pointer border-2 border-transparent
                    px-4 py-2 gap-2 rounded-md mt-4 
                   hover:bg-gold-hover active:border-text-primary active:bg-gold-hover/90
                    active:scale-102
                    transition-all duration-200">
                        Buy Now</button>
                </div>
            </div>
        </div>
    )
}

export default CruiseType


// type CruiseTypeAttentionGrabber = {
//     title: "Cruise Type",
//     description: "A card component has a figure, a body part, and inside body there are title and actions parts",
//     image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
//     icon: ""
// }