import { useState } from "react";
import SearchBar from "../molecules/SearchBar";
import FilterBar from "../molecules/FilterBar";
import FilterResults from "../organisms/FilterResults";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [filter, setFilter] = useState("all");

  const handleSearch = async () => {
    const response = await fetch(`/api/search?query=${query}`);
    const data = await response.json();
    setResults(data.results);
  };

  return (
    <div>
      <h1>Search Page</h1>
      <SearchBar
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onSearch={handleSearch}
      />
      <FilterBar filter={filter} setFilter={setFilter} />
      <FilterResults filter={filter} results={results} query={query} />
    </div>
  );
};

export default SearchPage;