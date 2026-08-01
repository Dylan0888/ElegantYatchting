import React from "react";

type FilterCategory = "location" | "date" | "tags"
interface Props {
  title: FilterCategory;
  buttonOptions: string[];
  handleFilters: (filterType: string, filterValue: string) => void;
}

const FilterButton = ({ title, buttonOptions, handleFilters }: Props) => {
  return (
    <select
      defaultValue={title}
      className="
        select
        h-12
        min-w-20
        rounded-2xl
        border
        border-border
        bg-secondary-bg
        px-6
        text-text-primary
        shadow-md
        transition-all
        duration-300
        hover:border-gold
        hover:bg-surface
        hover:text-gold
        hover:shadow-xl
      "
      onChange={(e) => handleFilters(title, e.target.value)}
    >
      {/* Placeholder */}

      <option className="uppercase" disabled value={title}>
        {title}
      </option>

      {buttonOptions.map((option) => (
        <option 
          key={option}
          value={option}
        >
          {option}
        </option>
      ))}

    </select>
  );
};

export default FilterButton;