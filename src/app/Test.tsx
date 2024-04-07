import {useEffect} from "react";
import {services} from "../shared/api";

export const Test = () => {
  useEffect(() => {
    const getCatalog = async () => {
      console.log(await services.catalog.getFullCatalog());
    }

    getCatalog();
  }, []);

  return <div className="w-10 h-10 bg-red-700" />
}
