import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

import sidebarReducer from "./slices/globalSlice";

const makeStore = () =>
  configureStore({
    reducer: {
      sidebar: sidebarReducer,
    },
    devTools: true,
  });

export const wrapper = createWrapper(makeStore);
