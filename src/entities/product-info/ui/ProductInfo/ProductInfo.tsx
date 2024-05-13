import { Breadcrumbs, LayoutWrapper } from "../../../../shared/ui";
import { ProductInfoCard } from "../ProductInfoCard/ProductInfoCard";
import { useEffect, useState } from "react";
import { IProduct } from "../../../../shared/types/api/product";
import { productsService } from "../../../../shared/api/ProductsService";
import { useParams } from "react-router";

export const ProductInfo = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<IProduct | null>(null);

  useEffect(() => {
    productsService.getProduct(id!).then((p) => setProduct(p));
  }, []);

  return (
    <LayoutWrapper>
      <Breadcrumbs />
      {product && <ProductInfoCard product={product} />}
    </LayoutWrapper>
  );
};
