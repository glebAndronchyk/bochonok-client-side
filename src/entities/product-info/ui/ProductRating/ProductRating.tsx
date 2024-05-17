import { useState } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { Button } from "../../../../shared/ui";
import { StarRating } from "../../../../shared/ui/StarRating/StarRating";
import { productsService } from "../../../../shared/api/ProductsService";
import { useProductState } from "../../lib/context/ProductContext";

interface IProductRatingProps {
  productId: string;
}

export const ProductRating = ({ productId }: IProductRatingProps) => {
  const productState = useProductState();
  const [rating, setRating] = useState(0);

  const handleRatingChange = (val: number) => {
    setRating(val);
  };

  const onSubmitRating = async () => {
    try {
      const updatedRating = await productsService.changeProductRating(
        productId,
        rating,
      );

      productState.updateRating(updatedRating);
    } catch (e) {
      console.log(e);
    } finally {
      setRating(0);
    }
  };

  return (
    <div className="flex gap-4 items-center">
      <StarRating rating={rating} onRatingChange={handleRatingChange} />
      {!!rating && (
        <Button
          onClick={onSubmitRating}
          variants={["dark", "sm"]}
          className="p-0.5"
        >
          <CheckIcon className="w-4 h-4" />
        </Button>
      )}
    </div>
  );
};
