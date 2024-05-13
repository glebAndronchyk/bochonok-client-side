import { createBrowserRouter } from "react-router-dom";
import { ProductsList } from "../entities/products-list";
import { Layout } from "./layout";
import { InitFetchersWrapper } from "../shared/wrappers/InitFetchersWrapper/InitFetchersWrapper";

export class Router {
  constructor() {}

  create() {
    return createBrowserRouter([
      {
        element: (
          <InitFetchersWrapper>
            <Layout />
          </InitFetchersWrapper>
        ),
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
