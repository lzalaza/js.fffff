import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    cartItems: [],
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    addUser: (state, action) => {
      state.users.push(action.payload);
    },
    removeUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
    addCartItem: (state, action) => {
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity = Math.max(existingItem.quantity + action.payload.quantity, 1);
      } else {
        state.cartItems.push(action.payload);
      }
    },
    removeCartItem: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
  },
});

export const { setUsers, addUser, removeUser, addCartItem, removeCartItem } = usersSlice.actions;

export default usersSlice.reducer;
