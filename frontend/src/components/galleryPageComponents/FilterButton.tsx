import React from "react";

interface Props {
  title: string;
  buttonOptions: string[];
}

const FilterButton = ({ title, buttonOptions }: Props) => {
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
    >
      {/* Placeholder */}

      <option disabled>
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