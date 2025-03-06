import axios from "axios";

export const getProducts = async () => {
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.status);
    } else {
      throw new Error("Brak odpowiedzi z serwera");
    }
  }
};
