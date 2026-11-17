
import { Search } from "lucide-react";

function SearchBar({ search, setSearch, category, setCategory }) {
  return (
    <div className="search-box">
      <div className="search-input">
        <Search size={20} />
        <input
          type="text"
          placeholder="Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All Categories</option>
        <option value="Technology">Technology</option>
        <option value="Hackathon">Hackathon</option>
        <option value="Workshop">Workshop</option>
        <option value="Conference">Conference</option>
        <option value="Cultural">Cultural</option>
        <option value="Sports">Sports</option>
      </select>
    </div>
  );
}

export default SearchBar;
