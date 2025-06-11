import { configureStore } from "@reduxjs/toolkit";
import { counterReducer, postReducer } from "../dashboard/store";

export const makeStore = () =>
  configureStore({
    reducer: {
      counter: counterReducer,
      post: postReducer,
    },
  });
