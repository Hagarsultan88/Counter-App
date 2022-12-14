import { createSlice } from "@reduxjs/toolkit";
 
const counterReducer = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    max: 100,
    min: 10
  },
  reducers: {
    increment: cState => {cState.value++},
    decrement: cState => {cState.value--}, 
  },
});


export default counterReducer.reducer


export const {increment,decrement} = counterReducer.actions