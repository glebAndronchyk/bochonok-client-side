import { ICatalogProps } from "../../types/ICatalogProps";
import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import { CatalogButton } from "../CatalogButton/CatalogButton";
import { Card } from "../../../../shared/ui";
import { ScaleTransition } from "../../../../shared/ui";
import { useRootState } from "../../../../shared/wrappers/MobxProvider";
import { PlusIcon, StarIcon } from "@heroicons/react/20/solid";
import { useSearchParams } from "react-router-dom";

export const Catalog = ({ items }: ICatalogProps) => {
  const { modal } = useRootState();
  const [_, setParam] = useSearchParams();

  const handleAddCategory = () => {
    modal.openModal("addCategory");
  };

  const handleCategoryClick = (id: string) => () => {
    setParam(`category=${id}`);
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
                <div className="relative">
                  <Card.Horizontal
                    onClick={handleCategoryClick(item.id)}
                    key={item.id}
                    description={item.description}
                    title={item.title}
                    img={item.imageB64}
                  />
                  {item.isFavorite && (
                    <StarIcon className="w-5 h-5 text-yellow-400 absolute top-2 right-2" />
                  )}
                </div>
              ))}
              <Card.Horizontal
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
