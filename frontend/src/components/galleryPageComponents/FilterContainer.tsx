import FilterButton from "./FilterButton";
import type { GalleryItemStructure } from "../../types/types";
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

  const dateSortOptions = [
  {
    label: "Most Recent Voyage",
    func: (d: GalleryItemStructure[]) =>
      [...d].sort(
        (a, b) =>
          new Date(b.date).getTime() -
          new Date(a.date).getTime()
      ),
  },
  {
    label: "Earliest Voyage",
    func: (d: GalleryItemStructure[]) =>
      [...d].sort(
        (a, b) =>
          new Date(a.date).getTime() -
          new Date(b.date).getTime()
      ),
  },
];









  return (
    <section className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-6 py-10">
      <FilterButton title="Location" />
      <FilterButton title="Year" />
      <FilterButton title="Category" />
    </section>
  );
};

export default FilterContainer;