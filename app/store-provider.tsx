"use client";
import { ReactNode, useRef } from "react";
import { Provider } from "react-redux";
import { makeStore } from "./lib";
import { AppStore } from "./types";

export const StoreProvider = ({ children }: { readonly children: ReactNode }) => {
  const storeRef = useRef<AppStore>(undefined);
  storeRef.current ??= makeStore();

  return <Provider store={storeRef.current}>{children}</Provider>;
};
