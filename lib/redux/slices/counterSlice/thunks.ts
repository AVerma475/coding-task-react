/* Instruments */
import type { ReduxThunkAction } from "@/lib/redux";
import { incrementByAmount } from "./counterSlice";

export const incrementIfOddAsync =
  (amount: number, setInputValue: (num: number) => void): ReduxThunkAction =>
  (dispatch, getState) => {
    // update only if currentValue is odd
    const currentCounterValue = getState().counter.value;
    if (currentCounterValue % 2 !== 0) {
      dispatch(incrementByAmount(amount));
    }
    // Set value of input to 0
    setInputValue(0);
  };
