import { IProduct } from "./IProduct";

export interface ISimplifiedProduct
  extends Omit<IProduct, "totalRated" | "totalRating"> {}
