import { useNavigate } from "react-router-dom";
import { IListBoxValue } from "../../../../shared/ui/ListBox/types";
import { useMemo } from "react";
import { allValue } from "../../../../shared/ui/ListBox/settings/staticFields";
import { useRootState } from "../../../../shared/wrappers/MobxProvider";
import { ListBox } from "../../../../shared/ui/ListBox/ListBox";
import { IProductListHeaderProps } from "../../types/IProductListHeaderProps";
import { observer } from "mobx-react";

interface ICategorySelectorProps
  extends Pick<IProductListHeaderProps, "activeCategory"> {}

export const CategorySelector = observer(
  ({ activeCategory }: ICategorySelectorProps) => {
    const navigate = useNavigate();
    const { categories } = useRootState();

    const mapCategoriesToListbox = (): IListBoxValue[] => {
      return categories.catalogList.map((category) => {
        return {
          value: category.id,
          label: category.title,
        };
      });
    };

    const categoriesListBox = useMemo(
      () => [allValue, ...mapCategoriesToListbox()],
      [categories.catalogList],
    );

    const selectedCategory = useMemo(() => {
      if (activeCategory === null) {
        return allValue;
      }

      return categories.toListBoxFormat(categories.find(activeCategory)!);
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
