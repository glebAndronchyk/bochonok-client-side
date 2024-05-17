import { makeAutoObservable } from "mobx";
import { IProduct, IProductRating } from "../../../../shared/types/api/product";

export class ProductState {
  product: IProduct | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  setProduct(product: IProduct) {
    this.product = product;
  }

  updateRating(productRating: IProductRating) {
    if (!this.product) {
      return null;
    }

    this.product.totalRated = productRating.totalRated;
    this.product.totalRating = productRating.totalRating;
    this.product.rating = productRating.rating;
  }
}
