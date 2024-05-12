import { useNavigate } from "react-router-dom";
import { IListBoxValue } from "../../../../shared/ui/ListBox/types";
import { useEffect, useMemo } from "react";
import { allValue } from "../../../../shared/ui/ListBox/settings/staticFields";
import { useRootState } from "../../../../shared/wrappers/MobxProvider";
import { ListBox } from "../../../../shared/ui/ListBox/ListBox";
import { IProductListHeaderProps } from "../../types/IProductListHeaderProps";
import { observer } from "mobx-react";
import { ICategory } from "../../../../shared/types/api/category";

interface ICategorySelectorProps
  extends Pick<IProductListHeaderProps, "activeCategory"> {}

export const CategorySelector = observer(
  ({ activeCategory }: ICategorySelectorProps) => {
    const navigate = useNavigate();
    const { categories } = useRootState();

    const mapCategoriesToListbox = (list: ICategory[]): IListBoxValue[] => {
      return list.map((category) => {
        return {
          value: category.id,
          label: category.title,
        };
      });
    };

    const categoriesListBox = [
      allValue,
      ...mapCategoriesToListbox(categories.catalogList),
    ];

    const selectedCategory = useMemo(() => {
      const activeCategoryFromList = categories.find(activeCategory);
      if (activeCategory === null || !activeCategoryFromList) {
        return allValue;
      }

      return categories.toListBoxFormat(activeCategoryFromList);
    }, [activeCategory]);

    const handleCategoryChange = (listboxValue: IListBoxValue) => {
      if (listboxValue.value === "all") {
        navigate("/");
      } else {
        navigate("/?category=" + listboxValue.value);
      }
    };

    return (
      <div className="text-sm flex items-center gap-2">
        <span>Active category: </span>
        <ListBox
          onChange={handleCategoryChange}
          selectedValue={selectedCategory}
          values={categoriesListBox}
        />
      </div>
    );
  },
);
