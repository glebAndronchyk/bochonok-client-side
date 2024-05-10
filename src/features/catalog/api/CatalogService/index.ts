import {ApiServiceBase} from "../../../../shared/api/ApiServiceBase";
import {ICatalogItem} from "../../../../shared/types/api";

export class CatalogService extends ApiServiceBase {
  constructor() {
    super();
  }

  // TODO: add return type
  async getFullCatalog() {
    return await this.get<ICatalogItem[]>("Categories/");
  }
}

export const catalogService = new CatalogService();
