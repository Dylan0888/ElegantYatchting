import FilterButton from "./FilterButton";

const FilterContainer = () => {
  return (
    <section className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-4 px-6 py-10">
      <FilterButton title="Location" />
      <FilterButton title="Year" />
      <FilterButton title="Category" />
    </section>
  );
};

export default FilterContainer;