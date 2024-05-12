import { IProduct } from "./IProduct";

export interface IProductTransfer
  extends Omit<
    IProduct,
    "id" | "rating" | "totalRating" | "totalRated" | "imageB64"
  > {
  image: File | null;
}

export interface IProductTransferB64
  extends Omit<IProduct, "id" | "rating" | "totalRating" | "totalRated"> {}
