import React from 'react'
import type { IconType } from 'react-icons'

interface iconProps {
    Icon: IconType
    text: string 
}

const GridIcon = ({Icon, text}:iconProps) => {
    
  return (
    <p className='flex items-center gap-1'> 
         <Icon className='text-gold'/>
         {text}
                        
    </p>
  )
}

export default GridIcon
