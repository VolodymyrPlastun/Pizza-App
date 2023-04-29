import { createSlice } from "@reduxjs/toolkit";
import products from "../../../products";

const initialState = {
    pizzaArr: products,
    total: 0,
    amount: 5,
    isBtnClicked: false,
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        increase: (state, {payload}) => {
            const itemId = payload;
            
            const item = state.pizzaArr.find((item) => item.id === itemId);
            console.log(item.amount);
            if (item) {
              item.amount++;
            }
            // const cartItem = state.pizzaArr.find(item => item.id === payload.id);
            // cartItem.amount = cartItem.amount + 1;
        },
        decrease: (state, {payload}) => {
            const cartItem = state.pizzaArr.find(item => item.id === payload.id);
            console.log(cartItem);
            if (cartItem) {
                cartItem.amount = cartItem.amount - 1;
              }
            // cartItem.amount = cartItem.amount - 1;
        },
        onBtnClick: (state, {payload}) => {
            if(state.isBtnClicked === false) {
                state.isBtnClicked = true;
                console.log("state changed to true");
                return;
            }
            state.isBtnClicked = false;
            console.log("state changed to false");
        },
    }
});

export const {increase, decrease, onBtnClick} = cartSlice.actions;
console.log(onBtnClick);
export default cartSlice.reducer;

