import { action, computed, makeObservable, observable } from "mobx";
import { IAppStore } from "../app.store";

export class CountStore {
  count: number = 0;
  appStore: IAppStore;

  constructor(appStore: IAppStore) {
    makeObservable(this, {
      count: observable,
      increment: action,
      decrement: action,
      getCountValue: computed,
    });
    this.appStore = appStore;
  }
  increment = () => {
    this.count++;
  };
  decrement = () => {
    this.count--;
  };

  get getCountValue() {
    return this.count;
  }
}
