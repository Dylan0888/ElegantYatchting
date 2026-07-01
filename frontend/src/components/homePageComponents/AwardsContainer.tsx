import Award from './Award'
import {awardList} from '../../assets/AwardsList'

const AwardsContainer = () => {
  
  
               
   
  
  
  
  
  
  
  
    return (
        <div className="overflow-hidden my-5 bg-secondary-bg p-10 ">

            <ul className="flex gap-5  animate-infinite-scroll">
                {[...awardList,...awardList,...awardList].map((award, index) => (
                    <li key={index} className="shrink-0">
                        <Award {...award}/>
                    </li>
                ))}


            </ul>
        
        
        </div>
  )
}

export default AwardsContainer
