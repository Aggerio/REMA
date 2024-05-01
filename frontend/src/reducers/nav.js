import { createSlice } from "@reduxjs/toolkit";

export const navSlice= createSlice({
  name: "nav",
  initialState: {
    current: "Restaurants",
  },
  reducers: {
    change_nav: (state, action) => {
      state.name = action.payload || "Restaurants";
    },
  },
});

// Action creators are generated for each case reducer function
export const {change_nav} = navSlice.actions;

export default navSlice.reducer;

