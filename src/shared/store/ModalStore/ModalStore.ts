import { makeAutoObservable } from "mobx";
import { ModalKeys } from "../../../entities/modals/types";

export class ModalStore {
  currentModalKey: ModalKeys | null = null;
  isOpen = false;

  constructor() {
    makeAutoObservable(this);
  }

  openModal = (key: ModalKeys) => {
    this.currentModalKey = key;
    this.isOpen = true;
  }

  closeModal = () => {
    this.isOpen = false;
  }
}
