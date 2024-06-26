import { useEffect } from "react";
import { useRootState } from "../../../../shared/wrappers/MobxProvider";
import { productsService } from "../../../../shared/api/ProductsService";
import { EmptyList } from "../../../../shared/ui/EmptyList/EmptyList";
import { observer } from "mobx-react";
import { classNames } from "../../../../shared/lib/helpers/classNames";
import { Button, ProductCard } from "../../../../shared/ui";
import { toJS } from "mobx";

interface IListComponentProps {
  activeCategory: string | null;
}

// TODO: add virtualization
export const ListComponent = observer(
  ({ activeCategory }: IListComponentProps) => {
    const { products, modal } = useRootState();

    useEffect(() => {
      products.requestSimplifiedProductsList(activeCategory);
    }, [activeCategory]);

    const isWithProducts = products.simplifiedProducts.length > 0;

    const onAddNewProduct = () => {
      modal.openModal("addProduct");
    };

    return (
      <div className="min-h-[65vh] flex flex-col gap-4 justify-between">
        <div
          className={classNames(
            "min-h-full flex-1",
            isWithProducts
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              : "flex items-center justify-center",
          )}
        >
          {!products.simplifiedProducts.length ? (
            <EmptyList
              emptyText="No products in this category."
              addNewText="Add new :D."
              onAddNew={onAddNewProduct}
            />
          ) : (
            <>
              {products.simplifiedProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </>
          )}
        </div>
        {!!products.simplifiedProducts.length && (
          <Button
            variants={["dark", "md"]}
            className="w-full mt-4"
            onClick={onAddNewProduct}
          >
            Add New
          </Button>
        )}
      </div>
    );
  },
);
