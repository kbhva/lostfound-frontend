import React from "react";
import "./SearchBar.css";

const SearchBar = ({ query, onQueryChange, filter, onFilterChange, dayFilter, onDayFilterChange }) => {
  return (
    <div className="global-search-bar">
      {/* Search input */}
      <input
        type="text"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder="Search by title, location, or contact..."
        className="query-input"
      />

      {/* Item type filter */}
      <select value={filter} onChange={(e) => onFilterChange(e.target.value)} className="type-filter">
        <option value="all">All Items</option>
        <option value="lost">Lost Items</option>
        <option value="found">Found Items</option>
      </select>

      {/* Days filter */}
      <select value={dayFilter} onChange={(e) => onDayFilterChange(e.target.value)} className="days-filter">
        <option value="any">Any Time</option>
        <option value="1">Last 24 Hours</option>
        <option value="3">Last 3 Days</option>
        <option value="7">Last 7 Days</option>
      </select>
    </div>
  );
};

export default SearchBar;
