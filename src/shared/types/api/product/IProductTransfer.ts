import { IProduct } from "./IProduct";
import { IListBoxValue } from "../../../ui/ListBox/types";

export interface IProductTransfer
  extends Omit<
    IProduct,
    "id" | "rating" | "totalRating" | "totalRated" | "imageB64" | "categoryId"
  > {
  category: IListBoxValue;
  image: File | null;
}

export interface IProductTransferB64
  extends Omit<IProduct, "id" | "rating" | "totalRating" | "totalRated" | "salePrice"> {}
