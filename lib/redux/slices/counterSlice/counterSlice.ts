/* Core */
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// Define the initial state
const initialState: CounterSliceState = { value: 0, status: "idle" };

// Create a counter slice using createSlice
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // Define the increment, decrement, and incrementByAmount logic here
    increment: (state, action) => {
      // Incrementing state value by 1
      state.value += action.payload || 1;
    },
    decrement: (state, action) => {
      // Decrementing state value by 1
      state.value -= action.payload || 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      // Incrementing state value by the specified amount (payload)
      state.value += action.payload;
    },
  },
});

/* Types */
export interface CounterSliceState {
  value: number;
  status: "idle" | "loading" | "failed";
}

// Extract the actions from the slice
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// Export the reducer
export default counterSlice.reducer;
