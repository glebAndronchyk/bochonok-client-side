import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { useRootState } from "../../../../shared/wrappers/MobxProvider";

// TODO: add virtualization
export const ListComponent = () => {
  const { products } = useRootState();
  const [searchParams] = useSearchParams();
  const activeCategory = searchParams.get("category");

  useEffect(() => {}, [activeCategory]);

  return (
    <div>
      {/*{products.productsList.map((product) => (*/}
      {/*  <div key={product.id}>*/}
      {/*    <h2>{product.name}</h2>*/}
      {/*    <p>{product.description}</p>*/}
      {/*  </div>*/}
      {/*))}*/}
    </div>
  );
};
