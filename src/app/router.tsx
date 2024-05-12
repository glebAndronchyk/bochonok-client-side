import { createBrowserRouter } from "react-router-dom";
import { ProductsList } from "../entities/products-list";
import { Layout } from "./layout";

export class Router {
  constructor() {}

  create() {
    return createBrowserRouter([
      {
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <ProductsList />,
          },
          {
            path: "/product",
            element: <div>Product page</div>,
          },
        ],
      },
    ]);
  }
}
