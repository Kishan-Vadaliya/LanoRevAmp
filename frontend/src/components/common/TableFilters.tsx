import React from "react";
import FilterSelect from "./FilterSelect";

interface FilterOption {
  value: string;
  label: string;
}

interface TableFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  searchPlaceholder?: string;
  filters?: {
    [key: string]: {
      value: string;
      onChange: (value: string) => void;
      options: FilterOption[];
      label: string;
    };
  };
}

const TableFilters: React.FC<TableFiltersProps> = ({ filters = {} }) => {
  return (
    <div className="mb-4 flex flex-col sm:flex-row gap-4">
      {Object.entries(filters).map(([key, filter]) => (
        <FilterSelect
          key={key}
          value={filter.value}
          onChange={filter.onChange}
          options={filter.options}
          label={filter.label}
        />
      ))}
    </div>
  );
};

export default TableFilters;
