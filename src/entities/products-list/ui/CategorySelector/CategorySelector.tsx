import { useNavigate } from "react-router-dom";
import { IListBoxValue } from "../../../../shared/ui/ListBox/types";
import { IProductListHeaderProps } from "../../types/IProductListHeaderProps";
import { observer } from "mobx-react";
import { CategoriesListBox } from "../../../../shared/ui";

interface ICategorySelectorProps
  extends Pick<IProductListHeaderProps, "activeCategory"> {}

export const CategorySelector = observer(
  ({ activeCategory }: ICategorySelectorProps) => {
    const navigate = useNavigate();

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
        <CategoriesListBox
          withAllValue
          activeCategory={activeCategory}
          onChange={handleCategoryChange}
        />
      </div>
    );
  },
);
