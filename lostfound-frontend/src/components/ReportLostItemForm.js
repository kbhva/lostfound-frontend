import React, { useState } from "react";
import "./ReportLostItemForm.css";

const ReportLostItemForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    date: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: Send formData to backend when API is ready
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
        />
        <textarea
          name="description"
          placeholder="Description"
          rows="3"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="location"
          placeholder="Last Seen Location"
          value={formData.location}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
        {/* TODO: Connect this to backend API */}
      </form>
    </div>
  );
};

export default ReportLostItemForm;
