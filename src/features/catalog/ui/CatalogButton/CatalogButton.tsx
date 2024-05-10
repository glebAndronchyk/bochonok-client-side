import { ICatalogButtonProps } from "../../types/ICatalogButtonProps";
import { Button } from "../../../../shared/ui/Button/Button";

export const CatalogButton = ({ onClick }: ICatalogButtonProps) => {
  return (
    <Button variants={["light", "lg"]} onClick={onClick} id="catalog-button" className="mb-2">
      Catalog
    </Button>
  );
};
