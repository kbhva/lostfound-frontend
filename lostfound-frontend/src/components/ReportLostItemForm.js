import React from "react";
import "./ReportLostItemForm.css";

const ReportLostItemForm = () => {
  return (
    <div className="report-form">
      <h3>Report a Lost Item</h3>
      <form>
        <input type="text" placeholder="Item Title" />
        <textarea placeholder="Description" rows="3" />
        <input type="text" placeholder="Last Seen Location" />
        <input type="date" />
        <button type="submit">Submit</button>
        {/* TODO: Add form submission logic & connect to backend */}
      </form>
    </div>
  );
};

export default ReportLostItemForm;
