// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
 import locationReducer from "../slice/Slice"

const store = configureStore({
  reducer: {
    location: locationReducer,
  },
});

export default store;
