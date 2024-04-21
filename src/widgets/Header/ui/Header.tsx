import { Logo } from "../../../shared/ui";
import { Catalog, catalogService } from "../../../features/catalog";
import { useServiceFetcher } from "../../../shared/lib/hooks/fetch/useServiceFetcher";

export const Header = () => {
  const { data } = useServiceFetcher(catalogService.getFullCatalog.bind(catalogService));

  return (
      <header className="flex gap-12 items-center p-3 shadow-md bg-white">
        <Logo />
        <Catalog items={data || []} />
      </header>
  );
}
