import { Breadcrumbs, LayoutWrapper } from "../../../../shared/ui";
import { ProductInfoCard } from "../ProductInfoCard/ProductInfoCard";
import { useEffect, useState } from "react";
import { productsService } from "../../../../shared/api/ProductsService";
import { useParams } from "react-router";
import { observer } from "mobx-react";
import { ProductState } from "../../lib/state/ProductState";
import { ProductContext } from "../../lib/context/ProductContext";

export const ProductInfo = observer(() => {
  const { id } = useParams();
  const [productState] = useState(() => new ProductState());

  useEffect(() => {
    productsService.getProduct(id!).then((p) => productState.setProduct(p));
  }, []);

  return (
    <ProductContext.Provider value={productState}>
      <LayoutWrapper>
        <Breadcrumbs product={productState.product} />
        {productState.product && (
          <ProductInfoCard product={productState.product} />
        )}
      </LayoutWrapper>
    </ProductContext.Provider>
  );
});
