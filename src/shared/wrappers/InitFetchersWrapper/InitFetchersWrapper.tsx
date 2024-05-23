import { PropsWithChildren, useEffect } from "react";
import { useRootState } from "../MobxProvider";
import { useCategoryParam } from "../../lib/hooks/navigation/useCategoryParam";

export const InitFetchersWrapper = ({ children }: PropsWithChildren) => {
  const { categories, products } = useRootState();
  const activeCategory = useCategoryParam();

  useEffect(() => {
    Promise.all([
      categories.requestCatalogList(),
      products.requestSimplifiedProductsList(activeCategory),
    ]);
  }, []);

  return <>{children}</>;
};
