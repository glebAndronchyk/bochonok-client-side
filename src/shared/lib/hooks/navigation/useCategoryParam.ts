import { useSearchParams } from "react-router-dom";

export const useCategoryParam = () => {
  const [searchParams] = useSearchParams();
  const activeCategory = searchParams.get("category");

  return activeCategory;
};
