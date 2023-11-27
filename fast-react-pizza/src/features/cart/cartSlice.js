import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // cart:[]
  cart: [
    {
      pizzaId: 12,
      name: "Mediterranean",
      quantity: 2,
      unitPrice: 16,
      totalPrice: 32,
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push = action.payload;
    },
    deleteItem(state, action) {
      state.cart = state.cart.filter((cart) => cart.pizzaId !== action.payload);
    },
    increateItemQuantity(state, action) {
      const item = state.cart.find((cart) => cart.pizzaId === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      const item = state.cart.find((cart) => cart.pizzaId === action.payload);

      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state, action) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  decreaseItemQuantity,
  deleteItem,
  increateItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
