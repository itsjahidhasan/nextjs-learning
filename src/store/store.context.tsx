"use client";

import { createContext, useContext } from "react";
import { AppStoreType } from "./app.store";

export const AppStoreContext = createContext<AppStoreType | null>(null);
export const useStore = () => useContext(AppStoreContext);
