import React, { useEffect, useState } from "react";
import ReportFoundItemForm from "../components/ReportFoundItemForm";
import FoundItemCard from "../components/FoundItemCard";
import { getFoundItems } from "../services/api";
import "./FoundPage.css";

const FoundPage = () => {
  const [foundItems, setFoundItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const data = await getFoundItems();
      setFoundItems(data);
    };
    fetchItems();
  }, []);

  const handleNewItem = (newItem) => {
    setFoundItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <div className="found-page">
      <ReportFoundItemForm onNewItem={handleNewItem} />

      <h2>Found Items</h2>
      <div className="item-list">
        {foundItems.length === 0 ? (
          <p>No items have been reported yet.</p>
        ) : (
          foundItems.map((item) => (
            <FoundItemCard key={item._id} item={item} />
          ))
        )}
      </div>
    </div>
  );
};

export default FoundPage;
