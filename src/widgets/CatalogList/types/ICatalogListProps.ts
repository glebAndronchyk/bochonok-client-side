import { ICatalogProps } from "../../../features/catalog/types/ICatalogProps";
import { TParameterlessVoidFunction } from "../../../shared/types/misc";

export interface ICatalogListProps extends Pick<ICatalogProps, "items"> {
  isOpen: boolean;
  toggle: TParameterlessVoidFunction;
}
