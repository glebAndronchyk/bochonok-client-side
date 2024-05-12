export interface ICategoryNumerated extends ICategoryBase {
  id: string;
}

export interface ICategoryBase {
  title: string;
  description: string;
  imageB64: string;
  isFavorite: boolean;
}

export interface ICategoryTransfer extends Omit<ICategoryBase, "imageB64"> {
  image: File | null;
}
