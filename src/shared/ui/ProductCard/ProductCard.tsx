import { PointerEvent } from "react";

import { ISimplifiedProduct } from "../../types/api/product";
import { ShoppingCartIcon, StarIcon } from "@heroicons/react/20/solid";
import { Button } from "../Button/Button";

interface IProductCardProps extends Omit<ISimplifiedProduct, "id"> {
  onClick: () => void;
}

export const ProductCard = ({
  title,
  description,
  rating,
  price,
  imageB64,
  soldBy,
  onClick,
}: IProductCardProps) => {
  const onAddToCart = (e: PointerEvent) => {
    console.log(e);
  };

  return (
    <div
      onClick={onClick}
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
          <p>
            <span className="text-green-500 text-3xl font-semibold">
              {price}
            </span>{" "}
            <span className="text-gray-500 text-xl font-medium">hrn.</span>
          </p>
          <Button
            variants={["dark", "md"]}
            className="p-2"
            onPointerDown={onAddToCart}
          >
            <ShoppingCartIcon className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </div>
  );
};
