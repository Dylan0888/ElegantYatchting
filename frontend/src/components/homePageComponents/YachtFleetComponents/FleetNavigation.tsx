import type { directions } from '../../../types/types';

type FleetNavigationProps = {
    direction: directions;
    moveFunction: () => void;
}

const FleetNavigation = ({ direction, moveFunction }: FleetNavigationProps) => {


    const button = {
        left:
            <button
                onClick={moveFunction}
                className="
                    absolute left-4 top-1/2 -translate-y-1/2
                    btn btn-circle border-white/20 text-white/50
                    hover:border-gold
                    active:text-gold
                    transition-all duration-150 #
                    z-10"
            >
                ❮
            </button>
        ,
        Right:
            <button
                onClick={moveFunction}
                className="
                    absolute right-4 top-1/2 -translate-y-1/2
                    btn btn-circle border-white/20 text-white/50
                    hover:border-gold
                    active:text-gold
                    transition-all duration-150
                    z-10 "
            >
                ❯
            </button>
    }


    return (
        <>
        {direction === "left" ? button.left : button.Right}
        </>
       
    )

}

export default FleetNavigation
