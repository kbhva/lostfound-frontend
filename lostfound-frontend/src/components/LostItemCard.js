import React from "react";
import "./LostItemCard.css";

const LostItemCard = ({ title, description, location, date }) => {
  return (
    <div className="lost-item-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <p>📍 <strong>Last seen:</strong> {location}</p>
      <p>📅 <strong>Date Lost:</strong> {date}</p>
    </div>
  );
};

export default LostItemCard;
