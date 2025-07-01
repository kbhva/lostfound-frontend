import React from "react";
import "./App.css";
import Header from "./components/Header";
import LostItemCard from "./components/LostItemCard";

function App() {
  return (
    <div className="App">
      <Header />
      <LostItemCard
        title="Wallet"
        description="Brown leather wallet with ID inside"
        location="Library"
        date="2025-06-28"
      />
      {/* TODO: Later connect to backend and map list of items dynamically */}
    </div>
  );
}

export default App;
