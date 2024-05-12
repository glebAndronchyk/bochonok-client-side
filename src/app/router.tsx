import { createBrowserRouter } from "react-router-dom";
import { ProductsList } from "../entities/products-list";

export class Router {
  constructor() {}

  create() {
    return createBrowserRouter([
      {
        path: "/",
        element: <ProductsList />,
      },
      {
        path: "/product",
        element: <div>Product page</div>,
      },
    ]);
  }
}
