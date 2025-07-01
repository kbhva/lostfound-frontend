import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import LostItemCard from "./components/LostItemCard";
import ReportLostItemForm from "./components/ReportLostItemForm";
import { getLostItems } from "./services/api";

function App() {
  const [lostItems, setLostItems] = useState([]);

  useEffect(() => {
    // Later, this will hit the backend
    const fetchData = async () => {
      const data = await getLostItems();
      setLostItems(data);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <Header />

      {lostItems.map((item) => (
        <LostItemCard
          key={item.id}
          title={item.title}
          description={item.description}
          location={item.location}
          date={item.date}
        />
      ))}

      <ReportLostItemForm />
    </div>
  );
}

export default App;
