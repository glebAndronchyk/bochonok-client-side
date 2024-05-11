import {ApiServiceBase} from "../../../../shared/api/ApiServiceBase";
import {ICategory} from "../../../../shared/types/api";

export class CatalogService extends ApiServiceBase {
  constructor() {
    super();
  }

  // TODO: add return type
  async getFullCatalog() {
    return await this.get<ICategory[]>("Categories/");
  }
}

export const catalogService = new CatalogService();
