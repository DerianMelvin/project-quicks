import SearchIcon from "@/components/icons/SearchIcon";

export default function SearchBar() {
  return (
    <form className="w-full">
      <div className="relative flex items-center justify-between">
        <label htmlFor="searchBar" className="sr-only">
          Search Bar
        </label>
        <input
          type="text"
          name="searchBar"
          placeholder="Search"
          className="w-full border rounded-md px-14 py-1 placeholder-[#333333]"
        />
        <div className="absolute right-14">
          <SearchIcon />
        </div>
      </div>
    </form>
  );
}
