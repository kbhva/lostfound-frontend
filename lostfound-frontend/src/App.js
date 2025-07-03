import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import LostPage from "./pages/LostPage";
import FoundPage from "./pages/FoundPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {/* Redirect root to lost by default */}
          <Route path="/" element={<Navigate to="/lost" />} />

          {/* Route to Lost Items Page */}
          <Route path="/lost" element={<LostPage />} />

          {/* Route to Found Items Page */}
          <Route path="/found" element={<FoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
