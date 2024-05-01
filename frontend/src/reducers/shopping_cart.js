import { createSlice } from "@reduxjs/toolkit";

export const storeSlice= createSlice({
  name: "cart",
  initialState: {
    num_items: 3,
    desc_items: [],
  },
  reducers: {
    add_item: (state, action) => {
      state.num_items += 1;
      state.desc_items.push(action.payload);
    },
    remove_item: (state, action) => {
      let found = false;
      for (let i = 0; i < state.desc_items; ++i) {
        if (state.desc_items[i]["name"] == action.payload) {
          found = true;
          state.desc_items.splice(i, 1);
        }
      }
      if (found) state.num_items -= 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { add_item, remove_item } = storeSlice.actions;

export default storeSlice.reducer;
