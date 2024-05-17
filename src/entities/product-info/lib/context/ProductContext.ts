import { createContext, useContext } from "react";
import { ProductState } from "../state/ProductState";

export const ProductContext = createContext<ProductState | null>(null);

export const useProductState = () => {
  const productState = useContext(ProductContext);

  if (!productState) {
    throw new Error("No product context found.");
  }

  return productState;
};
