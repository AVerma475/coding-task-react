"use client";
/* Core */
import React, { useState } from "react";
/* Instruments */
import {
  useSelector,
  selectCount,
  useDispatch,
  decrement,
  increment,
  incrementByAmount,
  incrementIfOddAsync,
} from "@/lib/redux";
import styles from "./counter.module.css";

export const Counter = () => {
  const count = useSelector(selectCount);
  // Create a state named incrementAmount
  const [inputValue, setInputValue] = useState<number>(0);
  const dispatch = useDispatch();

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => {
            // dispatch event to decrease count by 1
            dispatch(decrement(1));
          }}
        >
          -
        </button>
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => {
            // dispatch event to increment count by 1
            dispatch(increment(1));
          }}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          onChange={(event) => {
            if (!isNaN(Number(event.target.value))) {
              setInputValue(Number(event.target.value));
            }
          }}
          value={inputValue}
          style={{ width: "150px" }}
        />
        <button
          className={styles.button}
          onClick={() => {
            if(inputValue > 0)
            dispatch(incrementByAmount(inputValue));
            setInputValue(0);
          }}
        >
          Add Amount
        </button>
        <button
          className={styles.button}
          onClick={() => {
            if(inputValue > 0){
            // dispatch event to add incrementAmount only if count is odd
            dispatch(incrementIfOddAsync(inputValue, setInputValue));}else{
              setInputValue(0);
            }
          }}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
};
