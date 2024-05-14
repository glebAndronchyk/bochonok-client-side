import { ISimplifiedProduct } from "../../types/api/product";
import { StarIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import { Price } from "../Price/Price";
import { AddToCartButton } from "../AddToCartButton/AddToCartButton";

interface IProductCardProps extends ISimplifiedProduct {}

export const ProductCard = ({
  title,
  description,
  rating,
  price,
  imageB64,
  soldBy,
  id,
  salePrice,
}: IProductCardProps) => {
  return (
    <Link
      to={`/product/${id}`}
      className="p-4 h-[27rem] transition-all active:scale-[102%] hover:scale-[102%] bg-white shadow-xl rounded-md flex flex-col gap-6 cursor-pointer"
    >
      <div className="w-full rounded-md overflow-hidden flex-[3] relative bg-gray-200">
        <div className="absolute top-0 right-0 bg-yellow-200 items-center rounded-md p-2 text-lg flex gap-2 z-10">
          <span className="font-semibold">{rating}</span>
          <StarIcon className="relative -top-[0.10rem] text-yellow-500 w-6 h-6" />
        </div>
        <img
          src={imageB64}
          className="block object-contain p-3 absolute rounded-md  w-full h-full"
          alt="product-image"
        />
      </div>
      <div className="flex-1 flex justify-between">
        <div>
          <p className="text-2xl font-semibold pb-1 mb-1 border-b-2 border-b-green-500">
            {title}
          </p>
          <p className="text-gray-500 text-md">{description}</p>
          <p className="text-gray-500 text-sm">Sold by: {soldBy}</p>
        </div>
        <div className="flex flex-col gap-1 items-center self-stretch">
          <Price price={price} salePrice={salePrice} />
          <AddToCartButton />
        </div>
      </div>
    </Link>
  );
};
