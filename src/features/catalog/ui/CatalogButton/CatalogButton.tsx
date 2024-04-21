import { ICatalogButtonProps } from "../../types/ICatalogButtonProps";

export const CatalogButton = ({ onClick }: ICatalogButtonProps) => {
  return (
    <button
      id="catalog-btn"
      className="text-xl font-medium p-4 rounded-lg border-2 border-green-500 hover:bg-green-500 hover:text-white transition-all mb-2"
      onClick={onClick}
    >
      Catalog
    </button>
  );
};
