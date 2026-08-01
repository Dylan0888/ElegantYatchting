import type { GalleryItemStructure, FilterCategory } from "../../types/galleryTypes";

  // reusable functions to pull info from the gallery data - used for storing all locations, tags and only the years found in the data
export const getCategoryData = (imgInfo: GalleryItemStructure[], category: FilterCategory) => {
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