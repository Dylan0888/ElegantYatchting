import FilterButton from "./FilterButton";
import type { GalleryItemStructure } from "../../types/galleryTypes";
import {  useEffect } from "react";
import type {filters} from '../../types/galleryTypes'
import { getCategoryData } from "./galFunctions";
interface props {
  data: GalleryItemStructure[],
  //setList: React.Dispatch<React.SetStateAction<GalleryItemStructure[]>>
  filterState:{
    selectedFilters: filters
    setFilters: React.Dispatch<React.SetStateAction<filters>>
  }
}
const FilterContainer = ({ data, filterState }: props) => {
  
  // Destructure the filterState prop to get selectedFilters and setFilters
  const { selectedFilters, setFilters } = filterState;


  // Updated UseState filters 
  const handleFilterChange = (filterType: string, filterValue: string) => {
    setFilters((prevFilters) => ({...prevFilters, [filterType]: filterValue}));
  }

  // test useEffect to see if the filters are stored correctly 
  useEffect(() => {
    console.log("Selected Filters: ", selectedFilters);
  }, [selectedFilters]);

  // Gets all category data from the gallery data to populate the filter buttons
  const availableYears = getCategoryData(data, "date")
  const availableLocations = getCategoryData(data, "location")
  const availableTags = getCategoryData(data, "tags")






  // Year Sort options 

  // const dateSortOptions = [
  //   {
  //     label: "Most Recent Voyage",
  //     func: (d: GalleryItemStructure[]) =>
  //       [...d].sort(
  //         (a, b) =>
  //           new Date(b.date).getTime() -
  //           new Date(a.date).getTime()
  //       ),
  //   },
  //   {
  //     label: "Earliest Voyage",
  //     func: (d: GalleryItemStructure[]) =>
  //       [...d].sort(
  //         (a, b) =>
  //           new Date(a.date).getTime() -
  //           new Date(b.date).getTime()
  //       ),
  //   },
  // ];


  return (
    <section className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-6 py-10">
      <FilterButton 
        title="location" 
        buttonOptions={availableLocations} 
        handleFilters={handleFilterChange}
      />
      <FilterButton 
        title="date" 
        buttonOptions={availableYears} 
        handleFilters={handleFilterChange}
      />
      <FilterButton 
        title="tags" 
        buttonOptions={availableTags} 
        handleFilters={handleFilterChange}
      />
    </section>
  );
};

export default FilterContainer;