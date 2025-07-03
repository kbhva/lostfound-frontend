import React from "react";
import "./FoundItemCard.css";

const FoundItemCard = ({ item }) => {
  return (
    <div className="found-item-card">
      <h4>{item.title}</h4>
      <p><strong>Description:</strong> {item.description}</p>
      <p><strong>Found at:</strong> {item.foundLocation}</p>
      <p><strong>Date:</strong> {item.dateFound}</p>
      <p><strong>Contact:</strong> {item.contactInfo}</p>
      {item.claimed && <span className="claimed-tag">Claimed</span>}
    </div>
  );
};

export default FoundItemCard;
