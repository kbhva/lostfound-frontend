import React, { useState } from "react";
import "./ReportLostItemForm.css";
import { submitLostItem } from "../services/api";

const ReportLostItemForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    lastSeenLocation: "",
    dateLost: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await submitLostItem(formData);
    console.log("API response:", response);

    if (response.success) {
      alert("Lost item submitted successfully!");
      setFormData({
        title: "",
        description: "",
        lastSeenLocation: "",
        dateLost: "",
      });
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="report-form">
      <h3>Report a Lost Item</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Item Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          rows="3"
          value={formData.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastSeenLocation"
          placeholder="Last Seen Location"
          value={formData.lastSeenLocation}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="dateLost"
          value={formData.dateLost}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReportLostItemForm;
