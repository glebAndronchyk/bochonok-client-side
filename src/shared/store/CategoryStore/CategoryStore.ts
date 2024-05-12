import { makeAutoObservable } from "mobx";
import { ICategory } from "../../types/api/category";

export class CategoryStore {
  catalogList: ICategory[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setCatalogList(list: ICategory[]) {
    this.catalogList = [...list];
  }

  addCatalogItem(item: ICategory) {
    this.catalogList.push(item);
  }
}
