//https://redux.js.org/introduction/why-rtk-is-redux-today

import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    ProductAdded(state, action) {
      state.push({
        id: action.payload.id,
        title: action.payload.title,
        description: action.payload.description,
        image: action.payload.image,
      });
    },

    ProductToggled(state, action) {
      const product = state.find((product) => product.id === action.payload);
      console.log(product + " has been toggled");
    },
  },
});

export const { ProductAdded, ProductToggled } = productsSlice.actions;
export default productsSlice.reducer;
