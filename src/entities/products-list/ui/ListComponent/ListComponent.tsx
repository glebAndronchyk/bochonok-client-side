import { useEffect } from "react";
import { useRootState } from "../../../../shared/wrappers/MobxProvider";
import { productsService } from "../../../../shared/api/ProductsService";
import { EmptyList } from "../../../../shared/ui/EmptyList/EmptyList";
import { observer } from "mobx-react";
import { classNames } from "../../../../shared/lib/helpers/classNames";
import { ProductCard } from "../../../../shared/ui";

interface IListComponentProps {
  activeCategory: string | null;
}

// TODO: add virtualization
export const ListComponent = observer(
  ({ activeCategory }: IListComponentProps) => {
    const { products, modal } = useRootState();

    useEffect(() => {
      productsService.getProductsList(activeCategory).then((productsList) => {
        products.setSimplifiedProductsList(productsList);
      });
    }, [activeCategory]);

    const isWithProducts = products.simplifiedProducts.length > 0;

    const onAddNewProduct = () => {
      modal.openModal("addProduct");
    };

    return (
      <div
        className={classNames(
          "min-h-[65vh]",
          isWithProducts
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            : "flex items-center justify-center",
        )}
      >
        {!products.simplifiedProducts.length && (
          <EmptyList
            emptyText="No products in this category."
            addNewText="Add new :D."
            onAddNew={onAddNewProduct}
          />
        )}
        {products.simplifiedProducts.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    );
  },
);
