import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gptSearch",
  initialState: {
    showGptSearch: false,
    MovieNames: null,
    MovieResults: null,
  },
  reducers: {
    togleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResults: (state, action) => {
      const { MovieNames, MovieResults } = action.payload;
      state.MovieNames = MovieNames;
      state.MovieResults = MovieResults;
    },
  },
});

export default gptSlice.reducer;
export const { togleGptSearchView, addGptMovieResults } = gptSlice.actions;
