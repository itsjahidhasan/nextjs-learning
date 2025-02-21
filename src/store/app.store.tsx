import { autorun } from "mobx";
import { CountStore } from "./count-store";

export interface IAppStore {
  countStore: CountStore;
}

export class AppStore implements IAppStore {
  countStore: CountStore;
  constructor() {
    this.countStore = new CountStore(this);
    autorun(() => {
      console.log({ count: this.countStore.getCountValue });
    });
  }
}

const appStore = new AppStore();

export type AppStoreType = {
  appStore: typeof appStore;
};
