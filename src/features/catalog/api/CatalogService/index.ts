import { ApiServiceBase } from "../../../../shared/api/ApiServiceBase";
import { ICategoryNumerated } from "../../../../shared/types/api";
import { ICategoryBase } from "../../../../shared/types/api/category/ICategory";

export class CatalogService extends ApiServiceBase {
  constructor() {
    super();
  }

  getFullCatalog = async () => {
    return await this.get<ICategoryNumerated[]>("Categories/");
  };

  addCategory = async (category: ICategoryBase) => {
    return await this.post<string>("Categories/", JSON.stringify(category));
  };
}

export const catalogService = new CatalogService();
