import { ListComponent } from "../ListComponent/ListComponent";
import { ListHeader } from "../ListhHeader/ListHeader";

export const ProductsList = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <ListHeader />
      <ListComponent />
    </div>
  );
};
