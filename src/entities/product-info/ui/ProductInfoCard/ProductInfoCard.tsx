import { IProduct } from "../../../../shared/types/api/product";

interface IProductInfoCardProps {
  product: IProduct;
}

export const ProductInfoCard = ({ product }: IProductInfoCardProps) => {
  return (
    <div>
      <div>
        <div></div>
        <img src={product.imageB64} alt="product-image" />
      </div>
      <div></div>
    </div>
  );
};
