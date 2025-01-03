import { createSlice } from "@reduxjs/toolkit";

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    items: [],
    status: "N/A",
    categoryName: "",
  },
  reducers: {
    fetchItems: () => {},
    setStatus: (state, { payload: status }) => {
      state.status = status;
    },
    setCategory: (state, { payload: categoryName }) => {
      state.categoryName = categoryName;
    },
    fetchItemsSuccess: (state, { payload: items }) => {
      state.items = items;
    },
    fetchItemsError: (state, { payload: error }) => {
      state.status = error;
    },
  },
});

const selectCategory = (state) => state.category;
export const selectStatus = (state) => selectCategory(state).status;
export const selectCategoryName = (state) => selectCategory(state).categoryName;
export const selectItems = (state) => selectCategory(state).items;

export const {
  fetchItems,
  setStatus,
  setCategory,
  fetchItemsSuccess,
  fetchItemsError,
} = categorySlice.actions;
export default categorySlice.reducer;
