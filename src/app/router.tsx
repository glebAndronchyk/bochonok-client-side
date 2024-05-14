import { createBrowserRouter } from "react-router-dom";
import { ProductsList } from "../entities/products-list";
import { Layout } from "./layout";
import { InitFetchersWrapper } from "../shared/wrappers/InitFetchersWrapper/InitFetchersWrapper";
import { ProductInfo } from "../entities/product-info";
import { ModalWrapper } from "../shared/wrappers/ModalWrapper";

export class Router {
  constructor() {}

  create() {
    return createBrowserRouter([
      {
        element: (
          <ModalWrapper>
            <InitFetchersWrapper>
              <Layout />
            </InitFetchersWrapper>
          </ModalWrapper>
        ),
        children: [
          {
            path: "/",
            element: <ProductsList />,
          },
          {
            path: "/product/:id",
            element: <ProductInfo />,
          },
        ],
      },
    ]);
  }
}
