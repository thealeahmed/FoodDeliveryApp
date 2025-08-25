import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import cartReducer from "./features/cartSlice";

// --- Load state from localStorage ---
const loadState = () => {
  try {
    const serializedState = localStorage.getItem("cart");
    return serializedState ? JSON.parse(serializedState) : { items: [] };
  } catch (err) {
    console.error("Could not load state", err);
    return { items: [] };
  }
};

// --- Save state to localStorage ---
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state.cart);
    localStorage.setItem("cart", serializedState);
  } catch (err) {
    console.error("Could not save state", err);
  }
};

// --- Configure store with preloadedState for cart ---
const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
  preloadedState: {
    cart: loadState(),   // 👈 load cart from localStorage
  },
});

// --- Subscribe to store changes ---
store.subscribe(() => {
  saveState(store.getState());
});

export default store;
