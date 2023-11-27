import { configureStore, createReducer } from "@reduxjs/toolkit";
import useReducer from "./features/user/userSlice";

const store = configureStore({
  reducer: {
    user: useReducer,
    cart: createReducer,
  },
});

export default store;
