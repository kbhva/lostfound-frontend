import React, { useEffect, useState } from "react";
import LostItemCard from "../components/LostItemCard";
import ReportLostItemForm from "../components/ReportLostItemForm";
import { getLostItems } from "../services/api";
import "./LostPage.css";

const LostPage = () => {
  const [lostItems, setLostItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getLostItems();
      setLostItems(data);
    };
    fetchData();
  }, []);

  const handleNewItem = (newItem) => {
    setLostItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <div className="lost-page">
      <ReportLostItemForm onNewItem={handleNewItem} />

      <h2>Lost Items</h2>
      <div className="item-list">
        {lostItems.length === 0 ? (
          <p>No lost items yet.</p>
        ) : (
          lostItems.map((item) => (
            <LostItemCard key={item._id} item={item} />
          ))
        )}
      </div>
    </div>
  );
};

export default LostPage;
