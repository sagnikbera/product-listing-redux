import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  producsts: [],
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const fetchAPI = () => {
  return async (dispatch) => {
    const res = await axios.get("https://fakestoreapi.com/products");

    dispatch(setProducts(res.data));
  };
};

export const {setProducts} = productSlice.actions;

export default productSlice.reducer;
