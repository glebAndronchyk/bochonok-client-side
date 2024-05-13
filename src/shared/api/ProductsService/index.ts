import { ApiServiceBase } from "../ApiServiceBase";
import { IProduct, ISimplifiedProduct } from "../../types/api/product";
import { IProductTransferB64 } from "../../types/api/product/IProductTransfer";

export class ProductsService extends ApiServiceBase {
  constructor() {
    super();
  }

  getProductsList = async (categoryId: string | null = null) => {
    const fetchPath = categoryId
      ? "Products/Category/" + categoryId
      : "Products/";

    return await this.get<ISimplifiedProduct[]>(fetchPath);
  };

  getProduct = async (id: string) => {
    return await this.get<IProduct>(`Products/${id}`);
  };

  addProduct = async (category: IProductTransferB64) => {
    return await this.post<ISimplifiedProduct>(
      "Products/",
      JSON.stringify(category),
    );
  };

  changeProductRating = async (id: string, rating: number) => {
    return await this.post<string>(
      `Products/${id}/Rating`,
      JSON.stringify({ newRating: rating }),
    );
  };
}

export const productsService = new ProductsService();
