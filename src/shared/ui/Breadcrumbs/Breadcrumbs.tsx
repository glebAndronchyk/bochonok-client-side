import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import { useRootState } from "../../wrappers/MobxProvider";
import { useEffect, useState } from "react";
import { IBreadcrumb } from "./types/IBreadcrum";
import { IBreadcrumbsProps } from "./types/IBreadcrumbsProps";

const breadcrumbsLayout: IBreadcrumb[] = [
  {
    to: "/",
    label: "Home",
  },
];

export const Breadcrumbs = observer(({ product }: IBreadcrumbsProps) => {
  const { categories } = useRootState();
  const [breadcrumbs, setBreadcrumbs] = useState([...breadcrumbsLayout]);
  const activeCategory = categories.find(product?.categoryId);

  useEffect(() => {
    const isBreadcrumbExists = breadcrumbs.find(
      (b) => b.label === activeCategory?.title,
    );

    if (activeCategory && !isBreadcrumbExists) {
      setBreadcrumbs([
        ...breadcrumbs,
        {
          label: activeCategory?.title,
          to: `/?category=${activeCategory?.id}`,
        },
      ]);
    }
  }, [activeCategory]);

  return (
    <div className="pb-2 border-b-green-500 border-b-2 flex gap-2">
      {breadcrumbs.map((b) => (
        <Link
          to={b.to}
          className="text-lg text-green-500 font-bold line- text-center"
        >
          <span className="mr-2">{"<"}</span>
          {b.label}
        </Link>
      ))}
    </div>
  );
});
