import { makeAutoObservable } from "mobx";
import { ISimplifiedProduct } from "../../types/api/product";

export class ProductsStore {
  simplifiedProducts: ISimplifiedProduct[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setSimplifiedProductsList(productsList: ISimplifiedProduct[]) {
    this.simplifiedProducts = productsList;
  }

  addSimplifiedProductItem(product: ISimplifiedProduct) {
    this.simplifiedProducts.push(product);
  }
}
