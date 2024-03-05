import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    updateCartItemQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id);

      if (existingItem) {
        existingItem.quantity = action.payload.quantity;
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

// Selectors
export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartTotal = (state: RootState) =>
  state.cart.items.reduce((total, item) => total + item.price * item.quantity, 0);

export const { addToCart, removeFromCart, updateCartItemQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
