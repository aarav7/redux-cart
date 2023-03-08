import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    totalQuantity: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice = existingItem.quantity * existingItem.price;
            }
            else {
                state.items.push({
                    id: newItem.id,
                    title: newItem.title,
                    price: newItem.price,
                    description: newItem.description,
                    quantity: 1,
                    totalPrice: newItem.price
                });
            }
            state.totalQuantity = state.totalQuantity + 1;
        },
        removeItem(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id);
            }
            else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.quantity * existingItem.price;
            }
            state.totalQuantity = state.totalQuantity - 1;
        }
    }
})

export const cartActions = cartSlice.actions;
export default cartSlice;