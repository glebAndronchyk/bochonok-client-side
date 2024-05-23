import { makeAutoObservable } from "mobx";
import {ICategory, ICategoryTransferB64} from "../../types/api/category";
import { IListBoxValue } from "../../ui/ListBox/types";
import { catalogService } from "../../api/CatalogService";

export class CategoryStore {
  catalogList: ICategory[] = [];
  private _catalogService = catalogService;

  constructor() {
    makeAutoObservable(this);
  }

  async requestCatalogList() {
    this.catalogList = await this._catalogService.getFullCatalog();
  }

  async requestCatalogItemAddition(item: ICategoryTransferB64) {
    const categoryResponse = await this._catalogService.addCategory(item);
    this.catalogList.push(categoryResponse);
  }

  setCatalogList(list: ICategory[]) {
    this.catalogList = [...list];
  }

  addCatalogItem(item: ICategory) {
    this.catalogList.push(item);
  }

  toListBoxFormat(item?: ICategory | null): IListBoxValue {
    return {
      value: item?.id || "",
      label: item?.title || "",
    };
  }

  find(id?: string | null) {
    if (!id) {
      return null;
    }

    return this.catalogList.find((item) => item.id === id);
  }
}
