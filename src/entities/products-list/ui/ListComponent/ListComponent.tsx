import { useEffect } from "react";
import { useRootState } from "../../../../shared/wrappers/MobxProvider";
import { productsService } from "../../../../shared/api/ProductsService";
import { EmptyList } from "../../../../shared/ui/EmptyList/EmptyList";
import { observer } from "mobx-react";
import { classNames } from "../../../../shared/lib/helpers/classNames";

interface IListComponentProps {
  activeCategory: string | null;
}

// TODO: add virtualization
export const ListComponent = observer(
  ({ activeCategory }: IListComponentProps) => {
    const { products } = useRootState();

    useEffect(() => {
      if (!activeCategory) return;

      productsService.getProductsList(activeCategory).then((productsList) => {
        products.setSimplifiedProductsList(productsList);
      });
    }, [activeCategory]);

    const isWithProducts = products.simplifiedProducts.length > 0;

    return (
      <div
        className={classNames(
          "min-h-[60vh]",
          !isWithProducts ? "flex items-center justify-center" : "",
        )}
      >
        {!products.simplifiedProducts.length && (
          <EmptyList
            emptyText="No products in this category."
            addNewText="Add new :D."
            onAddNew={() => {}}
          />
        )}
        {/*{products.productsList.map((product) => (*/}
        {/*  <div key={product.id}>*/}
        {/*    <h2>{product.name}</h2>*/}
        {/*    <p>{product.description}</p>*/}
        {/*  </div>*/}
        {/*))}*/}
      </div>
    );
  },
);
