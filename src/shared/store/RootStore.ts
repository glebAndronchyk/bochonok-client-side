import { ModalStore } from "./ModalStore/ModalStore";
import { CategoryStore } from "./CatalogStore/CategoryStore";

export class RootStore {
  modal = new ModalStore();
  categories = new CategoryStore();
}
