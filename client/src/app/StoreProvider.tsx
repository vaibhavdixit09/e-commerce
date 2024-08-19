"use client";

import React, { useRef } from "react";
import { AppStore, makeStore } from "../lib/store/store";
import { Provider } from "react-redux";
import { addToCart } from "@/lib/store/features/cart/CartSlice";
const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
    storeRef.current.dispatch(addToCart("init"));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
