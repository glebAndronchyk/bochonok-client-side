import { makeAutoObservable } from "mobx";
import { ICategoryNumerated } from "../../types/api";

export class CategoryStore {
  catalogList: ICategoryNumerated[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  setCatalogList(list: ICategoryNumerated[]) {
    this.catalogList = [...list];
  }

  addCatalogItem(item: ICategoryNumerated) {
    this.catalogList.push(item);
  }
}
