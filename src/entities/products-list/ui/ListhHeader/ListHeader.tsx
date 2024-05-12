import { useRootState } from "../../../../shared/wrappers/MobxProvider";

interface IListHeaderProps {
  activeCategory: string | null;
}

export const ListHeader = ({ activeCategory }: IListHeaderProps) => {
  const { categories } = useRootState();

  return (
    <div className="flex gap-2 items-center">
      <h4 className="font-semibold text-xl">Products</h4>
      <p className="text-sm">
        Active category:{" "}
        <span className="italic">
          {activeCategory ? categories.find(activeCategory)?.title : "All"}
        </span>
      </p>
    </div>
  );
};
