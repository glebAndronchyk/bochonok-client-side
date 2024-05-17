import { makeAutoObservable } from "mobx";
import { ModalKeys } from "../../../entities/modals/types";

export class ModalStore {
  currentModalKey: ModalKeys | null = null;
  isOpen = false;
  props: unknown | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  openModal = <T>(key: ModalKeys, props: T = {} as T) => {
    this.currentModalKey = key;
    this.props = props;
    this.isOpen = true;
  };

  closeModal = () => {
    this.isOpen = false;
  };
}
