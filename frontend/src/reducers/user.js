import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
       role : "",
    },
    reducers: {
    change_user_role: (state, action) => {
      state.role = action.payload || "customer";
    },
  },
});

export const {change_user_role} = userSlice.actions;
export default userSlice.reducer;