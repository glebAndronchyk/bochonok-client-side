import {ApiServiceBase} from "../ApiServiceBase";

export class CatalogService extends ApiServiceBase {
  constructor() {
    super();
  }

  // TODO: add return type
  async getFullCatalog() {
    return await this.get("Catalog/");
  }
}
