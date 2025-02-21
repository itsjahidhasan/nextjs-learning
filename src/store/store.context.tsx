"use client";

import { createContext, useContext } from "react";
import { AppStore, AppStoreType } from "./app.store";

export const AppStoreContext = createContext<AppStoreType>({
  appStore: new AppStore(),
});
export const useStore = () => useContext(AppStoreContext);
