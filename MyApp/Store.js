import { configureStore } from "@reduxjs/toolkit";
import Slice from "./Slice";

const Store = configureStore({
  reducer: {
    counter: Slice.reducer
  }
});

console.log('Store configured:', Store.getState());

export { Store };
