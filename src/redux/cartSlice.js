import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [] // 💡 everything goes in here
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { category, item } = action.payload;

      const existingItem = state.items.find(
        (i) => i.item.id === item.id && i.category === category
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ category, item, quantity: 1 });
      }
    },

    removeItem: (state, action) => {
      const { category, id } = action.payload;

      state.items = state.items.filter(
        (i) => !(i.category === category && i.item.id === id)
      );
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
