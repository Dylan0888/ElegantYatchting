import React from 'react'
import YachtCard from './YachtCard'
import { yachtList } from '../../../assets/YachtList'


const YachtFleet = () => {
  
  return (
    <div className="flex gap-2 py-10">
      {yachtList.map((yacht, index) => (
        <YachtCard
          key={index}
          name={yacht.name}
          status={yacht.status}
          description={yacht.description}
          image={yacht.image}
          numGuests={yacht.numGuests}
          numCrew={yacht.numCrew}
          length={yacht.length}
          alt={yacht.alt}
        />
      ))}
    </div>
  )
}

export default YachtFleet
