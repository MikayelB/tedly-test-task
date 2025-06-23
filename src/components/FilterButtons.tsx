interface FilterButtonProps {
  label: string;
  count: number;
  isActive: boolean;
  onClick: () => void;
}

const FilterButton = ({
  label,
  count,
  isActive,
  onClick,
}: FilterButtonProps) => (
  <button
    onClick={onClick}
    className={`px-[15px] py-[13px] leading-none text-xs  rounded-[28px] border-[1.5px]  ${
      isActive
        ? "font-semibold bg-gray-200 text-gray-800"
        : "font-medium bg-white text-gray-500 border-gray-100"
    }`}
  >
    {label} ({count})
  </button>
);

interface FilterButtonsProps {
  counts: { [key: string]: number };
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const FilterButtons = ({
  counts,
  activeFilter,
  onFilterChange,
}: FilterButtonsProps) => (
  <div className="flex items-center gap-4">
    {Object.entries(counts).map(([filter, count]) => (
      <FilterButton
        key={filter}
        label={filter.charAt(0).toUpperCase() + filter.slice(1)}
        count={count}
        isActive={activeFilter === filter}
        onClick={() => onFilterChange(filter)}
      />
    ))}
  </div>
);

export default FilterButtons;
