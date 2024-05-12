import { ICategory } from "./ICategory";

export interface ICategoryTransfer extends Omit<ICategory, "id" | "imageB64"> {
  image: File | null;
}

export interface ICategoryTransferB64 extends Omit<ICategory, "id"> {}
