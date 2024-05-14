import { classNames } from "../../lib/helpers/classNames";

interface IPriceProps {
  price: number;
  salePrice: number;
}
export const Price = ({ price, salePrice }: IPriceProps) => {
  return (
    <div className="flex gap-2 items-center">
      <div className="text-center">
        {!!salePrice && (
          <span className="block text-green-500 text-3xl font-semibold">
            {salePrice}
          </span>
        )}
        <span
          className={classNames(
            "block text-green-500 text-3xl font-semibold",
            !!salePrice && "text-gray-400 font-normal text-xl line-through",
          )}
        >
          {price}
        </span>
      </div>
      <span className="text-gray-500 text-xl font-medium">hrn.</span>
    </div>
  );
};
