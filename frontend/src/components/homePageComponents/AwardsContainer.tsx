import React from 'react'

const AwardsContainer = () => {
  
    const img = "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
               
   const awards = [ img,img,img,img,img] 
  
  
  
  
  
  
  
    return (
        <div className="overflow-hidden">

            <ul className="flex gap-5 bg-black animate-infinite-scroll">
                {[...awards,...awards].map((award, index) => (
                    <li key={index} className="flex-shrink-0">
                        <figure className="card bg-base-100 w-96 shadow-sm">
                            <img src={award} />
                        </figure>
                    </li>
                ))}


            </ul>
        
        
        </div>
  )
}

export default AwardsContainer
