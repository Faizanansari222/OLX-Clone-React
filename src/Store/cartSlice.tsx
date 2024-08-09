import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface cartState {
  cart: any
}

const initialState: cartState = {
  cart: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state:any, data:any) => {
     state.cart.push(data.payload)
    //  console.log(state.cart);
     

    },
    removeCart: (state, data) => {
      const existingItem = state.cart.find((item:any) => item.id === data.payload);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          const index = state.cart.findIndex(
            (item:any) => item.id === data.payload
          );
          if (index !== -1) {
            state.cart.splice(index, 1);
          }
        }
      }
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeCart } = cartSlice.actions

export default cartSlice.reducer