import React from "react";
import { HiChevronDown } from "react-icons/hi";

interface Props {
  title: string;
  buttonOptions: string[] 
}

const FilterButton = ({ title, buttonOptions }: Props) => {
  return (
    <div className="dropdown dropdown-center">
      <button
        tabIndex={0}
        className="
          btn
          h-12
          min-w-44
          rounded-full
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
        <span>{title}</span>

        <HiChevronDown className="ml-2 text-base transition-transform duration-300 group-hover:rotate-180" />
      </button>

      <ul
        tabIndex={-1}
        className="
          dropdown-content
          menu
          mt-3
          w-60
          rounded-2xl
          border
          border-border
          bg-secondary-bg
          p-2
          shadow-2xl
        "
      >
        <li>
          <a className="rounded-xl transition-colors hover:bg-gold hover:text-bg">
            Option 1
          </a>
        </li>

        <li>
          <a className="rounded-xl transition-colors hover:bg-gold hover:text-bg">
            Option 2
          </a>
        </li>

        <li>
          <a className="rounded-xl transition-colors hover:bg-gold hover:text-bg">
            Option 3
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FilterButton;