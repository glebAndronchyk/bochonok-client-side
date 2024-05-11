import { makeAutoObservable } from "mobx";

export class ModalStore {
  constructor() {
    makeAutoObservable(this);
  }
}
