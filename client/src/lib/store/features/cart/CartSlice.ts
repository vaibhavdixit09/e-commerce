import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartState {
  items: string[];
}

const initialState: CartState = {
  items: [],
};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart } = CartSlice.actions;

export default CartSlice.reducer;
