import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8081/lost",
});

export const getLostItems = async () => {
  try {
    const response = await api.get("");
    return response.data;
  } catch (error) {
    console.error("Error fetching lost items:", error);
    return [];
  }
};

export const submitLostItem = async (itemData) => {
  try {
    const response = await api.post("", itemData);
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Error submitting lost item:", error);
    return { success: false };
  }
};

export default api;
