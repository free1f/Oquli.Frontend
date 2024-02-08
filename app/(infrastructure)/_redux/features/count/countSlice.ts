import { createSlice } from "@reduxjs/toolkit";
import { type TCount } from "@/app/(domain)/_models";

const initialState: TCount = {
  count: 0,
};

// slice
export const countSlice = createSlice({
  name: "types",
  initialState,
  reducers: {
    add: (state) => {
      state.count += 1
    },
    reduce: (state) => {
      state.count -= 1
    },
  },
  extraReducers: () => {},
});

export const { add, reduce } = countSlice.actions;

export default countSlice.reducer;
