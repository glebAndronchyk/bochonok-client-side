import { IProduct } from "../../../../shared/types/api/product";
import { AddToCartButton, Button, Price } from "../../../../shared/ui";
import { ShareIcon } from "@heroicons/react/20/solid";
import { useRootState } from "../../../../shared/wrappers/MobxProvider";
import { CardElement } from "../CardElement/CardElement";

interface IProductInfoCardProps {
  product: IProduct;
}

export const ProductInfoCard = ({ product }: IProductInfoCardProps) => {
  const { modal } = useRootState();

  const onShare = () => {
    modal.openModal("share", {
      categoryId: product.categoryId,
    });
  };

  return (
    <div className="p-8 flex gap-6 justify-between relative">
      <div className="break-all flex-1 relative">
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
        <div className="w-full text-gray-500 flex justify-between items-center text-sm absolute left-0 bottom-0">
          <span>CategoryId: {product.categoryId}</span>
          <Button onClick={onShare} variants={["dark", "rounded"]}>
            <ShareIcon className="w-6 h-6" />
          </Button>
        </div>
      </div>
      <div className="h-[37rem] rounded-md relative bg-gray-200 flex-1">
        <img
          src={product.imageB64}
          className="absolute object-contain w-full h-full p-6"
          alt="product-image"
        />
      </div>
    </div>
  );
};
