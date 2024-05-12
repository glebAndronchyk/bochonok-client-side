import { PropsWithChildren, useEffect } from "react";
import { useRootState } from "../MobxProvider";
import { catalogService } from "../../api/CatalogService";

export const InitFetchersWrapper = ({ children }: PropsWithChildren) => {
  const { categories } = useRootState();

  useEffect(() => {
    Promise.all([catalogService.getFullCatalog()]).then(([catalog]) => {
      categories.setCatalogList(catalog);
    });
  }, []);

  return <>{children}</>;
};
