import { ListComponent } from "../ListComponent/ListComponent";
import { ListHeader } from "../ListhHeader/ListHeader";
import { useCategoryParam } from "../../../../shared/lib/hooks/navigation/useCategoryParam";
import { LayoutWrapper } from "../../../../shared/ui";

export const ProductsList = () => {
  const activeCategory = useCategoryParam();

  return (
    <LayoutWrapper>
      <ListHeader activeCategory={activeCategory} />
      <ListComponent activeCategory={activeCategory} />
    </LayoutWrapper>
  );
};
