import { classNames } from "../../../shared/lib/helpers/classNames";
import { Card } from "../../../shared/ui";
import { ICatalogListProps } from "../types/ICatalogListProps";
import { useRef } from "react";
import { useOutsideClick } from "../../../shared/lib/hooks/interaction/useOutsideClick";

export const CatalogList = ({ isOpen, items, toggle }: ICatalogListProps) => {
  const listRef = useRef<HTMLDivElement>(null);

  useOutsideClick(listRef, toggle, [isOpen], {
    saveToClickElementIds: ["catalog-btn"],
  });

  return (
    <div
      ref={listRef}
      className={classNames(
        isOpen ? "opacity-100" : "opacity-0",
        "transition-opacity absolute bg-white rounded-md shadow-md p-4 min-w-80 gap-4 border",
      )}
    >
      {items.map((item) => (
        <Card.Horizontal
          onClick={() => {}}
          key={item.id}
          description={item.description}
          title={item.title}
          imgSrc={item.imagePath}
        />
      ))}

      <Card.Horizontal
        onClick={() => {}}
        key="add-category"
        description="Press to add category"
        title="New Category"
        imgSrc={""}
      />
    </div>
  );
};
