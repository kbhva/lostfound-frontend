import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8081/lost",
});

// Placeholder function for fetching lost items
export const getLostItems = async () => {
  return [
    {
      id: 1,
      title: "Wallet",
      description: "Brown leather wallet with ID inside",
      location: "Library",
      date: "2025-06-28",
    },
    {
      id: 2,
      title: "Umbrella",
      description: "Black umbrella with wooden handle",
      location: "Cafeteria",
      date: "2025-06-30",
    },
  ];
};

// Placeholder function to submit a lost item
export const submitLostItem = async (itemData) => {
  try {
    console.log("Submitting lost item:", itemData);

    // In the future, replace this with:
    // const response = await api.post("/", itemData);
    // return response.data;

    return { success: true, message: "Mock submission successful" };
  } catch (error) {
    console.error("Error submitting lost item:", error);
    return { success: false, message: "Submission failed" };
  }
};

export default api;
