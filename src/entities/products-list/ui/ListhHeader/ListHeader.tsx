import { CategorySelector } from "../CategorySelector/CategorySelector";
import { IProductListHeaderProps } from "../../types/IProductListHeaderProps";

export const ListHeader = ({ activeCategory }: IProductListHeaderProps) => {
  return (
    <div className="flex justify-between items-center mb-4 border-b-2 border-green-500 pb-2">
      <h4 className="font-semibold text-xl">Products</h4>
      <CategorySelector activeCategory={activeCategory} />
    </div>
  );
};
