import { configureStore } from "@reduxjs/toolkit";
import { counterReducer, postReducer } from "../dashboard/store";

const reducer = {
  counter: counterReducer,
  post: postReducer,
};

export const makeStore = () =>
  configureStore({
    reducer,
  });
