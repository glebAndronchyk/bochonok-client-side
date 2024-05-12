import { useEffect } from "react";
import { useRootState } from "../../../../shared/wrappers/MobxProvider";
import { productsService } from "../../../../shared/api/ProductsService";

interface IListComponentProps {
  activeCategory: string | null;
}

// TODO: add virtualization
export const ListComponent = ({ activeCategory }: IListComponentProps) => {
  const { products } = useRootState();

  useEffect(() => {
    if (!activeCategory) return;

    productsService.getProductsList(activeCategory).then((productsList) => {
      products.setSimplifiedProductsList(productsList);
    });
  }, [activeCategory]);

  return (
    <div className="">
      {/*{products.productsList.map((product) => (*/}
      {/*  <div key={product.id}>*/}
      {/*    <h2>{product.name}</h2>*/}
      {/*    <p>{product.description}</p>*/}
      {/*  </div>*/}
      {/*))}*/}
    </div>
  );
};
