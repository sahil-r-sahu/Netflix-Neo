import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice.utils";
import movieReducer from "./movieSlice.utils";
import gptReducer from "./gptSlice.utils";
import configReducer from "./configSlice.utils";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movie: movieReducer,
    gptSearch: gptReducer,
    config: configReducer,
  },
});

export default appStore;
