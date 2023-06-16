import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
  },
  reducers: {
    addProduct: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.quantity;
    },

    IncrementQty: (state,action) => {
state.products.map((product)=>{
  if(product._id === action.payload){
      product.quantity += 1;
    }
})
    },

    DecrementQty: (state,action) => {
      state.products.map((product)=>{
        if(product._id === action.payload){
            product.quantity -= 1;
          }
      })
          },
  },
});

export const { addProduct ,IncrementQty,DecrementQty} = cartSlice.actions;
export default cartSlice.reducer;
