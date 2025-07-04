import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import LostItemCard from "../components/LostItemCard";
import FoundItemCard from "../components/FoundItemCard";
import { getLostItems, getFoundItems } from "../services/api";
import "./SearchPage.css";

const SearchPage = () => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");
  const [dayFilter, setDayFilter] = useState("any");

  const [lostItems, setLostItems] = useState([]);
  const [foundItems, setFoundItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const lost = await getLostItems();
      const found = await getFoundItems();
      setLostItems(lost);
      setFoundItems(found);
    };
    fetchData();
  }, []);

  const normalize = (item) =>
    `${item.title} ${item.description} ${item.contactInfo} ${item.lastSeenLocation || item.foundLocation}`.toLowerCase();

  const isWithinDays = (dateStr, maxDays) => {
    if (maxDays === "any") return true;
    const itemDate = new Date(dateStr);
    const now = new Date();
    const daysDiff = (now - itemDate) / (1000 * 60 * 60 * 24);
    return daysDiff <= parseInt(maxDays);
  };

  const filteredLost = lostItems
    .filter((item) => normalize(item).includes(query.toLowerCase()))
    .filter((item) => isWithinDays(item.dateLost, dayFilter));

  const filteredFound = foundItems
    .filter((item) => normalize(item).includes(query.toLowerCase()))
    .filter((item) => isWithinDays(item.dateFound, dayFilter));

  return (
    <div className="search-page">
      <h2>Search Items</h2>

      <SearchBar
        query={query}
        onQueryChange={setQuery}
        filter={filter}
        onFilterChange={setFilter}
        dayFilter={dayFilter}
        onDayFilterChange={setDayFilter}
      />

      {(filter === "all" || filter === "lost") && (
        <div className="result-group">
          <h3>Lost Items</h3>
          <div className="results">
            {filteredLost.length > 0 ? (
              filteredLost.map((item) => <LostItemCard key={item._id} item={item} />)
            ) : (
              <p>No matching lost items.</p>
            )}
          </div>
        </div>
      )}

      {(filter === "all" || filter === "found") && (
        <div className="result-group">
          <h3>Found Items</h3>
          <div className="results">
            {filteredFound.length > 0 ? (
              filteredFound.map((item) => <FoundItemCard key={item._id} item={item} />)
            ) : (
              <p>No matching found items.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
