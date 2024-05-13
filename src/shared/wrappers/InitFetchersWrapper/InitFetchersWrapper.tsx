import { PropsWithChildren, useEffect } from "react";
import { useRootState } from "../MobxProvider";
import { catalogService } from "../../api/CatalogService";
import { productsService } from "../../api/ProductsService";
import {useCategoryParam} from "../../lib/hooks/navigation/useCategoryParam";

export const InitFetchersWrapper = ({ children }: PropsWithChildren) => {
  const { categories, products } = useRootState();
  const activeCategory = useCategoryParam();

  useEffect(() => {
    Promise.all([
      catalogService.getFullCatalog(),
      productsService.getProductsList(activeCategory),
    ]).then(([catalog, productsList]) => {
      categories.setCatalogList(catalog);
      products.setSimplifiedProductsList(productsList);
    });
  }, []);

  return <>{children}</>;
};
