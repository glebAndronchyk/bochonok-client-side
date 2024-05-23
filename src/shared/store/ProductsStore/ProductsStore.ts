import { makeAutoObservable } from "mobx";
import { ISimplifiedProduct } from "../../types/api/product";
import { productsService } from "../../api/ProductsService";
import { IProductTransferB64 } from "../../types/api/product/IProductTransfer";

export class ProductsStore {
  simplifiedProducts: ISimplifiedProduct[] = [];
  private _productsService = productsService;

  constructor() {
    makeAutoObservable(this);
  }

  async requestSimplifiedProductsList(categoryId?: string | null) {
    const productsResponse =
      await this._productsService.getProductsList(categoryId);
    this.simplifiedProducts = productsResponse;
  }

  async requestSimplifiedProductAddition(product: IProductTransferB64) {
    const productResponse = await this._productsService.addProduct(product);
    this.simplifiedProducts.push(productResponse);
  }

  setSimplifiedProductsList(productsList: ISimplifiedProduct[]) {
    this.simplifiedProducts = productsList;
  }

  addSimplifiedProductItem(product: ISimplifiedProduct) {
    this.simplifiedProducts.push(product);
  }
}
