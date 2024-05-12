import { CategorySelector } from "../CategorySelector/CategorySelector";
import { IProductListHeaderProps } from "../../types/IProductListHeaderProps";

export const ListHeader = ({ activeCategory }: IProductListHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <h4 className="font-semibold text-xl">Products</h4>
      <CategorySelector activeCategory={activeCategory} />
    </div>
  );
};
