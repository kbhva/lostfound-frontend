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

export default api;
