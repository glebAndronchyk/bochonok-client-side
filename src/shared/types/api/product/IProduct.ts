import { IDescribedNumeratedItem } from "../IDescribedNumeratedItem";

export interface IProduct extends IDescribedNumeratedItem {
  price: number;
  longDescription: string;
  categoryId: string;
  soldBy: string;
  rating: number;
  totalRating: number;
  totalRated: number;
}
