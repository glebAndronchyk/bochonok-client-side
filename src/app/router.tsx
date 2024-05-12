import { createBrowserRouter } from "react-router-dom";

export class Router {
  constructor() {}

  create() {
    return createBrowserRouter([
      {
        path: "/",
        element: <div>hh</div>,
      },
      {
        path: "/aaaa",
        element: <div>test</div>,
      },
    ]);
  }
}
