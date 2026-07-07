import CruiseType from "./CruiseType"

const AttentionGrid = () => {
    return (
        <div className="flex flex-col md:flex-row justify-center my-10 mx-5 
                    sm:items-center gap-10 lg:gap-20 xl:gap-30 ">
            <CruiseType />
            <CruiseType />

        </div>
    )
}

export default AttentionGrid
