import { ListComponent } from "../ListComponent/ListComponent";
import { ListHeader } from "../ListhHeader/ListHeader";
import { useCategoryParam } from "../../../../shared/lib/hooks/navigation/useCategoryParam";

export const ProductsList = () => {
  const activeCategory = useCategoryParam();

  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <ListHeader activeCategory={activeCategory} />
      <ListComponent activeCategory={activeCategory} />
    </div>
  );
};
