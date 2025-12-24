import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.utils";
import movieReducer from "./movieSlice.utils";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
  },
});

export default appStore;
