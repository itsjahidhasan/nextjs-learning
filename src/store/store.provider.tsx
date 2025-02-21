"use client";
import { FC, PropsWithChildren } from "react";
import { AppStoreContext } from "./store.context";
import { AppStore, AppStoreType } from "./app.store";

export const AppStoreProvider: FC<PropsWithChildren> = ({ children }) => {
  const store: AppStoreType = {
    appStore: new AppStore(),
  };

  return (
    <AppStoreContext.Provider value={store}>
      {children}
    </AppStoreContext.Provider>
  );
};
