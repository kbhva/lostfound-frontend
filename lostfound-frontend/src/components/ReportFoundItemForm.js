import React, { useState } from "react";
import { submitFoundItem } from "../services/api";
import "./ReportFoundItemForm.css";

const ReportFoundItemForm = ({ onNewItem }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    foundLocation: "",
    dateFound: "",
    contactInfo: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      ...formData,
      claimed: false,
    };

    try {
      const response = await submitFoundItem(payload);
      console.log("Found item submitted:", response);

      if (response.success) {
        alert("Found item submitted successfully!");
        onNewItem && onNewItem(response.data);
        setFormData({
          title: "",
          description: "",
          foundLocation: "",
          dateFound: "",
          contactInfo: "",
        });
      } else {
        alert("Submission failed. Please try again.");
      }
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="report-form">
      <h3>Report a Found Item</h3>
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
          name="foundLocation"
          placeholder="Location Found"
          value={formData.foundLocation}
          onChange={handleChange}
          required
        />
        <input
          type="date"
          name="dateFound"
          value={formData.dateFound}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="contactInfo"
          placeholder="Your Contact Info"
          value={formData.contactInfo}
          onChange={handleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ReportFoundItemForm;
