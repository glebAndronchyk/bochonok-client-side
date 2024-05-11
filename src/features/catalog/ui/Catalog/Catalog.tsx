import { ICatalogProps } from "../../types/ICatalogProps";
import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import { CatalogButton } from "../CatalogButton/CatalogButton";
import { Card } from "../../../../shared/ui";
import { ScaleTransition } from "../../../../shared/ui";

export const Catalog = ({ items }: ICatalogProps) => {
  return (
    <Menu>
      {({ open }) => (
        <>
          <MenuButton as="div">
            <CatalogButton />
          </MenuButton>
          <ScaleTransition shown={open}>
            <MenuItems
              anchor="bottom start"
              className="bg-white p-4 rounded-lg shadow-lg overflow-y-scroll no-scrollbar"
            >
              {items.map((item) => (
                <Card.Horizontal
                  onClick={() => {}}
                  key={item.id}
                  description={item.description}
                  title={item.title}
                  imgSrc={item.imageB64}
                />
              ))}
              <Card.Horizontal
                onClick={() => {}}
                key="add-category"
                description="Press to add category"
                title="New Category"
                imgSrc={""}
              />
            </MenuItems>
          </ScaleTransition>
        </>
      )}
    </Menu>
  );
};
