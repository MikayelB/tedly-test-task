import debounce from "lodash/debounce";
import { useCallback, useState } from "react";
import Search from "../icons/search.svg";

interface SearchButtonProps {
  onSearch: (term: string) => void;
}

const SearchButton = ({ onSearch }: SearchButtonProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const debouncedSearch = useCallback(
    debounce((term: string) => {
      onSearch(term);
    }, 300),
    []
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
    debouncedSearch(value);
  };

  return (
    <div className="relative">
      <button
        className="flex items-center p-[10px] justify-center bg-white rounded-[29px] hover:bg-gray-100"
        onClick={() => setIsSearchOpen(!isSearchOpen)}
      >
        <Search />
      </button>
      {isSearchOpen && (
        <input
          type="text"
          value={inputValue}
          className="absolute right-0 top-[120%] w-[200px] p-2 border  rounded-md shadow-lg"
          placeholder="Search projects..."
          onChange={handleChange}
          onBlur={() => setIsSearchOpen(false)}
          autoFocus
        />
      )}
    </div>
  );
};

export default SearchButton;
