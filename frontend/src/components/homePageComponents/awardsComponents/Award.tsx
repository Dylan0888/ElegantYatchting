import type { AwardStructure } from '../../../types/types'

const Award = (award: AwardStructure) => {
    return (
        <figure>
            <img src={award.img} />
        </figure>
    )
}

export default Award
