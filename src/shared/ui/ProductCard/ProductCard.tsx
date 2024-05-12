import { ISimplifiedProduct } from "../../types/api/product";

interface IProductCardProps extends ISimplifiedProduct {}

export const ProductCard = ({
  title,
  description,
  rating,
  price,
  imageB64,
  soldBy,
}: IProductCardProps) => {
  return (
    <div className="p-4 bg-white shadow-xl rounded-md min-h-[25rem] max-h-[25rem] lg:min-h-[30rem] lg:max-h-[30rem] flex flex-col gap-2">
      <div className="w-full rounded-md overflow-hidden relative flex-[4]">
        <div className="absolute">{rating}</div>
        <img src={imageB64} className="object-cover" alt="product-image" />
      </div>
      <div className="flex-1">
        <p>{title}</p>
        <p>{description}</p>
        <p>{price}</p>
        <p>{soldBy}</p>
      </div>
    </div>
  );
};
