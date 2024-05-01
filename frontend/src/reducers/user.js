import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
       role : "",
    },
    reducers: {
    change_user: (state, action) => {
      state.role = action.payload || "customer";
    },
  },
});

export const {change_user} = userSlice.actions;
export default userSlice.reducer;