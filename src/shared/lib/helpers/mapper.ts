import { ICategory } from "../../types/api/category";
import { IListBoxValue } from "../../ui/ListBox/types";

export class Mapper {
  static mapCategoriesToListbox = (list: ICategory[]): IListBoxValue[] => {
    return list.map((category) => {
      return {
        value: category.id,
        label: category.title,
      };
    });
  };
}
