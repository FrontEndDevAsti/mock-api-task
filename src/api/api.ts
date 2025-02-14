import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export const fetchItems = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error("Error fetching items", error);
    return [];
  }
};

export const createItem = async (title: string, body: string) => {
  try {
    const response = await axios.post(API_URL, { title, body });
    return response.data;
  } catch (error) {
    console.error("Error creating item", error);
    return null;
  }
};

export const updateItem = async (id: number, title: string, body: string) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, { title, body });
    return response.data;
  } catch (error) {
    console.error("Error updating item", error);
    return null;
  }
};

export const deleteItem = async (id: number) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error("Error deleting item", error);
  }
};