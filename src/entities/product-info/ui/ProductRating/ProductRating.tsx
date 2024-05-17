import { useState } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import { Button } from "../../../../shared/ui";
import { StarRating } from "../../../../shared/ui/StarRating/StarRating";
import { productsService } from "../../../../shared/api/ProductsService";

interface IProductRating {
  productId: string;
}

export const ProductRating = ({ productId }: IProductRating) => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (val: number) => {
    setRating(val);
  };

  const onSubmitRating = async () => {
    try {
      const updatedProduct = await productsService.changeProductRating(
        productId,
        rating,
      );
    } catch (e) {
      console.log(e);
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
