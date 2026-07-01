import type { AwardStructure } from '../../types/types'

const Award = (award: AwardStructure) => {
    return (
        <figure className="card bg-base-100 w-96 shadow-sm">
            <img src={award.img} />
        </figure>
    )
}

export default Award
