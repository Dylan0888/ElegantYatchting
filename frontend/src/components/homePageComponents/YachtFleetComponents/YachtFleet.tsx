import React from 'react'


interface Yacht {
  name: string;
  status: string;
  image: string;
  numGuests: number;
  numCrew: number;  
  length: number; // meters
}


const YachtFleet = () => {
  
  const yachts: Yacht[] = [
    {
      name: "Yacht 1",
      status: "NEW",
      image: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
      numGuests: 10,
      numCrew: 5,
      length: 50,
    },
  ]
  
  return (
    <div>
      
    </div>
  )
}

export default YachtFleet
