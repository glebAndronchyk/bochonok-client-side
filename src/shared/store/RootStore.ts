import { ModalStore } from "./ModalStore/ModalStore";
import { CategoryStore } from "./CategoryStore/CategoryStore";
import { ProductsStore } from "./ProductsStore/ProductsStore";

export class RootStore {
  modal = new ModalStore();
  categories = new CategoryStore();
  products = new ProductsStore();
}
