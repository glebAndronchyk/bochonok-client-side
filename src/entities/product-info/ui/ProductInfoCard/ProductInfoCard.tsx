import { IProduct } from "../../../../shared/types/api/product";
import { AddToCartButton, Price } from "../../../../shared/ui";
import { PropsWithChildren } from "react";

interface IProductInfoCardProps {
  product: IProduct;
}

export const ProductInfoCard = ({ product }: IProductInfoCardProps) => {
  return (
    <div className="p-8">
      <div className="flex gap-6 justify-between relative">
        <div className="break-all flex-1">
          <CardElement>
            <p className="pl-2 text-gray-500 text-md">
              Sold By: {product.soldBy} - {product.id}
            </p>
            <h3 className="text-8xl">{product.title}</h3>
          </CardElement>
          <CardElement>
            <p className="text-xl">{product.description}</p>
            <p className="py-2 border-t-2 border-b-2 text-xl border-green-500">
              {product.longDescription}
            </p>
          </CardElement>
          <CardElement>
            <p>{product.totalRated}</p>
            <p>{product.rating}</p>
          </CardElement>
          <div className="mt-12 flex justify-between items-center">
            <Price price={product.price} salePrice={product.salePrice} />
            <AddToCartButton />
          </div>
          <p className="text-gray-500 text-sm absolute left-0 bottom-0">
            CategoryId: {product.categoryId}
          </p>
        </div>
        <div className="h-[37rem] rounded-md relative bg-gray-200 flex-1">
          <img
            src={product.imageB64}
            className="absolute object-contain w-full h-full p-6"
            alt="product-image"
          />
        </div>
      </div>
      <div></div>
    </div>
  );
};

const CardElement = ({ children }: PropsWithChildren) => {
  return <div className="flex flex-col gap-2 mb-8">{children}</div>;
};
