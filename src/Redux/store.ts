import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice.ts";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

;

// Define TypeScript types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;