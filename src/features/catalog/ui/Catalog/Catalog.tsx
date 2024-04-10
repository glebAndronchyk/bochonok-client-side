import { ICatalogProps } from "../../types/ICatalogProps";
import { useToggle } from "../../../../shared/lib/hooks/state/useToggle";
import { CatalogList } from "../../../../widgets/CatalogList";
import { CatalogButton } from "../CatalogButton";

export const Catalog = ({ items }: ICatalogProps) => {
  const { toggle, isOpen } = useToggle();

  return (
    <div className="relative">
      <CatalogButton onClick={toggle} />
      <CatalogList items={items} isOpen={isOpen} toggle={toggle} />
    </div>
  );
};
