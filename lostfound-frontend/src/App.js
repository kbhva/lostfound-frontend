import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import LostPage from "./pages/LostPage";
import FoundPage from "./pages/FoundPage";
import Dashboard from "./pages/Dashboard";
import SearchPage from "./pages/SearchPage";




function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>

          <Route path="/" element={<Navigate to="/lost" />} />


          <Route path="/lost" element={<LostPage />} />


          <Route path="/found" element={<FoundPage />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
