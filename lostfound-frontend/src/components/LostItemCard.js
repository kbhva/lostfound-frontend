import React from "react";
import "./LostItemCard.css";

const LostItemCard = ({ item }) => {
  return (
    <div className="lost-item-card">
      <h2>{item.title}</h2>
      <p>{item.description}</p>
      <p><strong>Last seen:</strong> {item.lastSeenLocation || "Unknown"}</p>
      <p><strong>Date Lost:</strong> {item.dateLost || "Not provided"}</p>
      <p><strong>Contact:</strong> {item.contactInfo}</p>

    </div>
  );
};

export default LostItemCard;
