"use client";
import { useLocalObservable } from "mobx-react-lite";

export const useAppStore = () => {
  return useLocalObservable(() => ({
    count: 0,
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  }));
};

export type AppStoreType = ReturnType<typeof useAppStore>;
