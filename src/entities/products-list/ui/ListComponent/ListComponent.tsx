import { useEffect } from "react";
import { useRootState } from "../../../../shared/wrappers/MobxProvider";
import { useCategoryParam } from "../../../../shared/lib/hooks/fetch/useCategoryParam";
import { productsService } from "../../../../shared/api/ProductsService";

// TODO: add virtualization
export const ListComponent = () => {
  const { products } = useRootState();
  const activeCategory = useCategoryParam();

  useEffect(() => {
    if (!activeCategory) return;

    productsService.getProductsList(activeCategory).then((productsList) => {
      products.setSimplifiedProductsList(productsList);
    });
  }, [activeCategory]);

  return (
    <div>
      {/*{products.productsList.map((product) => (*/}
      {/*  <div key={product.id}>*/}
      {/*    <h2>{product.name}</h2>*/}
      {/*    <p>{product.description}</p>*/}
      {/*  </div>*/}
      {/*))}*/}
    </div>
  );
};
