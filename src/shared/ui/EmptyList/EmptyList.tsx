import { Button } from "../Button/Button";

interface IEmptyListProps {
  onAddNew: () => void;
  emptyText: string;
  addNewText: string;
}

export const EmptyList = ({
  onAddNew,
  addNewText,
  emptyText,
}: IEmptyListProps) => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center text-gray-500">
      <p>{emptyText}</p>
      <Button onClick={onAddNew} variants={["dark", "md"]}>
        {addNewText}
      </Button>
    </div>
  );
};
