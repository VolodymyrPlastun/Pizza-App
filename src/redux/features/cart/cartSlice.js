import { createSlice } from '@reduxjs/toolkit';
import products from '../../../products';

const initialState = {
  pizzaArr: products,
  total: 0,
  amount: 0,
  selectedItems: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increase: (state, { payload }) => {
      const itemId = payload;
      const cartItem = state.pizzaArr.find(item => item.id === itemId);
      cartItem.amount = cartItem.amount + 1;
      const existingItemIndex = state.pizzaArr.findIndex(
        card => card.id === itemId
      );

      if (existingItemIndex !== -1) {
        return;
      } else {
        state.selectedItems.push({ ...cartItem });
      }
    },
    decrease: (state, { payload }) => {
      const itemId = payload;
      const cartItem = state.pizzaArr.find(item => item.id === itemId);
      cartItem.amount = cartItem.amount - 1;
      const existingItemIndex = state.pizzaArr.findIndex(
        card => card.id === itemId
      );
      if (existingItemIndex !== -1) {
        console.log('item already exists in cart, Delete item');
        const existingItem = state.pizzaArr[existingItemIndex];
        console.log(existingItem);
        if (existingItem.amount < 1) {
          state.selectedItems = state.selectedItems.filter(
            item => item.id !== itemId
          );
        }
      }
    },
    onBtnClick: (state, { payload }) => {
      const index = state.pizzaArr.findIndex(pizza => pizza.id === payload);
      state.pizzaArr[index].isActive = true;
      state.pizzaArr[index].amount = 1;
      state.selectedItems.push(state.pizzaArr[index]);
    },
    calculateTotal: (state, { payload }) => {
      let totalAmount = 0;
      let totalPrice = 0;
      state.pizzaArr.forEach(item => {
        totalAmount += item.amount;
        totalPrice += item.amount * item.price;
      });
      state.amount = totalAmount;
      state.total = totalPrice;
    },
    clearCart: (state, { payload }) => {
      state.selectedItems = [];
      state.amount = 0;
    },
    // removeItem: (state, {payload: {id, amount}}) => {
    //     const removedItem = state.selectedItems.filter((item) => item.id !== id);
    //     const newAmount = state.amount - amount;
    //     state.selectedItems = removedItem;
    //     state.amount = newAmount;
    //   },
  },
});

export const { increase, decrease, onBtnClick, calculateTotal, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
