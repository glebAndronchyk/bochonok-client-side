import { Button } from "../../../../shared/ui/Button/Button";
import { IButtonProps } from "../../../../shared/ui/Button/types";

interface ICatalogButtonProps extends Pick<IButtonProps, "onClick"> {}

export const CatalogButton = ({ onClick }: ICatalogButtonProps) => {
  return (
    <Button
      variants={["light", "lg"]}
      onClick={onClick}
      id="catalog-button"
      className="mb-2"
    >
      Catalog
    </Button>
  );
};
