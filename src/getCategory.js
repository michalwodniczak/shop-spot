import axios from "axios";

export const getCategory = async (categoryName) => {
  try {
    const response = await axios.get(
      `https://fakestoreapi.com/products/category/${categoryName}`
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
