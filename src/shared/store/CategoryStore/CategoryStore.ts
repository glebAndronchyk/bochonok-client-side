import { makeAutoObservable } from "mobx";
import { ICategory } from "../../types/api/category";
import { IListBoxValue } from "../../ui/ListBox/types";

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
