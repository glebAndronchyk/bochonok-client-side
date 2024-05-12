import { observer } from "mobx-react";
import { useRootState } from "../../wrappers/MobxProvider";
import { Mapper } from "../../lib/helpers/mapper";
import { ListBox } from "../ListBox/ListBox";
import { useMemo } from "react";
import { IListBoxProps } from "../ListBox/types";
import { allValue } from "../ListBox/settings/staticFields";

interface ICategoriesListBoxProps extends Pick<IListBoxProps, "onChange"> {
  activeCategory: string | null;
  withAllValue?: boolean;
}

export const CategoriesListBox = observer(
  ({ activeCategory, onChange, withAllValue }: ICategoriesListBoxProps) => {
    const { categories } = useRootState();

    const categoriesListBox = [
      ...(withAllValue ? [allValue] : []),
      ...Mapper.mapCategoriesToListbox(categories.catalogList),
    ];

    const selectedCategory = useMemo(() => {
      const activeCategoryFromList = categories.find(activeCategory);
      if (activeCategory === null || !activeCategoryFromList) {
        return allValue;
      }

      return categories.toListBoxFormat(activeCategoryFromList);
    }, [activeCategory]);

    return (
      <ListBox
        onChange={onChange}
        selectedValue={selectedCategory}
        values={categoriesListBox}
      />
    );
  },
);
