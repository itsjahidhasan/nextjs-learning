"use client";
import { FC, PropsWithChildren } from "react";
import { AppStoreContext } from "./store.context";
import { useAppStore } from "./app.store";

export const AppStoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const store = useAppStore();
  return (
    <AppStoreContext.Provider value={store}>
      {children}
    </AppStoreContext.Provider>
  );
};
