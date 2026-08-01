import FilterButton from "./FilterButton";
import type { GalleryItemStructure } from "../../types/types";
import { useState, useEffect } from "react";
interface props {
  data: GalleryItemStructure[],
  setList: React.Dispatch<React.SetStateAction<GalleryItemStructure[]>>
}

// interface filterButtons {
//   name: string
//   func: function name(params:type) {

//   }
// }

const FilterContainer = ({ data, setList }: props) => {

  const [selectedFilters, setFilters] = useState({
    location: "",
    date: "",
    tags: "",
  });

  // Updated UseState filters 
  const handleFilterChange = (filterType: string, filterValue: string) => {
    setFilters((prevFilters) => ({...prevFilters, [filterType]: filterValue}));
  }

  // test useEffect to see if the filters are stored correctly 
  useEffect(() => {
    console.log("Selected Filters: ", selectedFilters);
  }, [selectedFilters]);








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


  // reusable functions to pull info from the gallery data - used for storing all locations, tags and only the years found in the data
  type FilterCategory = "location" | "date" | "tags"

  const getCategoryData = (imgInfo: GalleryItemStructure[], category: FilterCategory) => {
    const categoryInfo = new Set<string>(); // Creates unique set and returns it
    
    // Adds to set depending on specified category
    imgInfo.forEach((item) => {
      switch (category) {
        case "location":
          categoryInfo.add(item.location);
          break;
        case "date":
          categoryInfo.add(item.date.split("/")[2].trim());
          break;
        case "tags":
          item.tags.forEach((tag) => categoryInfo.add(tag))
          break;
        default:
          console.log("Sorry this category does not exist!");
      }    
    });
    return [...categoryInfo];
  };

  const availableYears = getCategoryData(data, "date")
  const availableLocations = getCategoryData(data, "location")
  const availableTags = getCategoryData(data, "tags")
  // ------------------------------------------- // 



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