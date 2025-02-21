"use client";
import { createContext, useContext } from "react";
import { AppStore, AppStoreType } from "./app.store";
import { enableLogging } from "mobx-logger";

export const AppStoreContext = createContext<AppStoreType>({
  appStore: new AppStore(),
});
if (process.env.NEXT_PUBLIC_DEVELOPMENT_MODE === "DEV") {
  enableLogging();
}
export const useStore = () => useContext(AppStoreContext);
