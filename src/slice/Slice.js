// src/redux/locationSlice.js
import { createSlice } from "@reduxjs/toolkit";

const locationSlice = createSlice({
  name: "location",
  initialState: {
    selectedLocation: "",
  },
  reducers: {
    setLocation: (state, action) => {
      state.selectedLocation = action.payload;
    },
  },
});

export const { setLocation } = locationSlice.actions;
export default locationSlice.reducer;
