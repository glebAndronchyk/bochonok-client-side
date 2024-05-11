export interface ICategory {
  id: string;
  title: string;
  description: string;
  imageB64: string;
  isFavorite: boolean;
}

export interface ICategoryTransfer extends Omit<ICategory, "id" | "imageB64"> {
  image: File | null;
}
