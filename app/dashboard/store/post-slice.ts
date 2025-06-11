import { Post } from "@/app/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: Post[] = [];

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
});

export const postActions = postSlice.actions;

export const postReducer = postSlice.reducer;
