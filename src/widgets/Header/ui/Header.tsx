import { Logo } from "../../../shared/ui";
import { Catalog, catalogService } from "../../../features/catalog";
import { observer } from "mobx-react";
import { useRootState } from "../../../shared/wrappers/MobxProvider";

export const Header = observer(() => {
  const { categories } = useRootState();

  return (
    <header className="flex gap-12 items-center p-3 shadow-md bg-white">
      <Logo />
      <Catalog items={categories.catalogList} />
    </header>
  );
});
