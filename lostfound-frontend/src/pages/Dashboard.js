import React, { useEffect, useState } from "react";
import { getLostItems, getFoundItems } from "../services/api";
import "./Dashboard.css";

const Dashboard = () => {
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

  const countClaimed = (items) => items.filter((item) => item.claimed).length;

  return (
    <div className="dashboard">
      <h2>System Dashboard</h2>
      <div className="stats">
        <div className="stat-card lost">
          <h3>Lost Items</h3>
          <p>Total: {lostItems.length}</p>
          <p>Claimed: {countClaimed(lostItems)}</p>
        </div>
        <div className="stat-card found">
          <h3>Found Items</h3>
          <p>Total: {foundItems.length}</p>
          <p>Claimed: {countClaimed(foundItems)}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
