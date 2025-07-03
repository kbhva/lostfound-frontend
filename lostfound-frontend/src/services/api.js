import axios from "axios";

// Axios instance for lost items
const lostApi = axios.create({
  baseURL: "http://localhost:8081/lost",
});

// Axios instance for found items
const foundApi = axios.create({
  baseURL: "http://localhost:8081/found",
});

/* ---------- LOST ITEM APIs ---------- */

export const getLostItems = async () => {
  try {
    const response = await lostApi.get("");
    return response.data;
  } catch (error) {
    console.error("Error fetching lost items:", error);
    return [];
  }
};

export const submitLostItem = async (itemData) => {
  try {
    const response = await lostApi.post("", itemData);
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Error submitting lost item:", error);
    return { success: false };
  }
};

/* ---------- FOUND ITEM APIs ---------- */

export const getFoundItems = async () => {
  try {
    const response = await foundApi.get("");
    return response.data;
  } catch (error) {
    console.error("Error fetching found items:", error);
    return [];
  }
};

export const submitFoundItem = async (itemData) => {
  try {
    const response = await foundApi.post("", itemData);
    return { success: true, data: response.data };
  } catch (error) {
    console.error("Error submitting found item:", error);
    return { success: false };
  }
};

export default { lostApi, foundApi };
