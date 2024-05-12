import { ApiServiceBase } from "../../../../shared/api/ApiServiceBase";
import {
  ICategory,
  ICategoryTransferB64,
} from "../../../../shared/types/api/category";

export class CatalogService extends ApiServiceBase {
  constructor() {
    super();
  }

  getFullCatalog = async () => {
    return await this.get<ICategory[]>("Categories/");
  };

  addCategory = async (category: ICategoryTransferB64) => {
    return await this.post<string>("Categories/", JSON.stringify(category));
  };
}

export const catalogService = new CatalogService();
