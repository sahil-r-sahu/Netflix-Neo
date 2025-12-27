import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSearch",
  initialState: {
    showGptSearch: false,
  },
  reducers: {
    togleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
  },
});

export default gptSlice.reducer;
export const { togleGptSearchView } = gptSlice.actions;
