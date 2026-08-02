import FilterButton from "./FilterButton";
import type { GalleryItemStructure } from "../../types/galleryTypes";
import type {filters} from '../../types/galleryTypes'
import { getCategoryData } from "./galFunctions";
import ClearFilterButton from "./ClearFilterButton";
interface props {
  data: GalleryItemStructure[],
  //setList: React.Dispatch<React.SetStateAction<GalleryItemStructure[]>>
  filterState:{
    selectedFilters: filters
    setFilters: React.Dispatch<React.SetStateAction<filters>>
  }
  filterCheck: boolean
}
const FilterContainer = ({ data, filterState, filterCheck }: props) => {
  
  // Destructure the filterState prop to get selectedFilters and setFilters
  const { selectedFilters, setFilters } = filterState;


  // Updated UseState filters 
  const handleFilterChange = (filterType: string, filterValue: string) => {
    setFilters((prevFilters) => ({...prevFilters, [filterType]: filterValue}));
  }


  // Gets all category data from the gallery data to populate the filter buttons and apply basic sorting to the data for better UX
  const availableYears = 
    getCategoryData(data, "date").sort(
      (a:string,b:string): number => parseInt(b) - parseInt(a)); 
  const availableLocations = getCategoryData(data, "location").sort();
  const availableTags = getCategoryData(data, "tags").sort();
 

  return (
    <section className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-6 py-10">
      
      <FilterButton 
        title="location" 
        buttonOptions={availableLocations} 
        handleFilters={handleFilterChange}
        value={selectedFilters.location}
      />
      <FilterButton 
        title="date" 
        buttonOptions={availableYears} 
        handleFilters={handleFilterChange}
        value={selectedFilters.date}
      />
      <FilterButton 
        title="tags" 
        buttonOptions={availableTags} 
        handleFilters={handleFilterChange}
        value={selectedFilters.tags}
      />

      {/* Shows a clear filter button if any filters are selected */}
      {filterCheck && (
        <ClearFilterButton setFilters={setFilters} />
      )}
      
      

     
    </section>
  );
};

export default FilterContainer;