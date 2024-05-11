import { ICatalogProps } from "../../types/ICatalogProps";
import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import { CatalogButton } from "../CatalogButton/CatalogButton";
import { Card } from "../../../../shared/ui";
import { ScaleTransition } from "../../../../shared/ui";
import { useRootState } from "../../../../shared/wrappers/MobxProvider";
import { PlusIcon } from "@heroicons/react/20/solid";

export const Catalog = ({ items }: ICatalogProps) => {
  const { modal } = useRootState();

  const handleAddCategory = () => {
    modal.openModal("addCategory");
  };

  return (
    <Menu>
      {({ open, close }) => (
        <>
          <MenuButton as="div">
            <CatalogButton />
          </MenuButton>
          <ScaleTransition shown={open}>
            <MenuItems
              anchor="bottom start"
              className="bg-white p-4 rounded-lg shadow-lg overflow-y-scroll no-scrollbar w-96"
            >
              {items.map((item) => (
                <Card.Horizontal
                  onClick={() => {}}
                  key={item.id}
                  description={item.description}
                  title={item.title}
                  img={item.imageB64}
                />
              ))}
              <Card.Horizontal
                as="div"
                onClick={() => {
                  close();
                  handleAddCategory();
                }}
                key="add-category"
                description="Press to add category"
                title="New Category"
                img={<PlusIcon className="w-5 h-5" />}
              />
            </MenuItems>
          </ScaleTransition>
        </>
      )}
    </Menu>
  );
};
