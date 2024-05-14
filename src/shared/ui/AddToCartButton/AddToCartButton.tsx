import { Button } from "../index";
import { ShoppingCartIcon } from "@heroicons/react/20/solid";
import { PointerEvent } from "react";

export const AddToCartButton = () => {
  const onAddToCart = (e: PointerEvent) => {
    console.log(e);
  };

  return (
    <Button
      variants={["dark", "md"]}
      className="p-2"
      onPointerDown={onAddToCart}
    >
      <ShoppingCartIcon className="w-6 h-6" />
    </Button>
  );
};
