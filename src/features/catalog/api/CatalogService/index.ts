import {ApiServiceBase} from "../../../../shared/api/ApiServiceBase";
import {ICatalogItem} from "../../../../shared/types/api";

export class CatalogService extends ApiServiceBase {
  constructor() {
    super();
  }

  // TODO: add return type
  async getFullCatalog() {
    console.log(this);
    return await this.get<ICatalogItem[]>("Catalog/");
  }
}

export const catalogService = new CatalogService();
