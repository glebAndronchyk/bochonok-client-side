import { RouterProvider } from "react-router-dom";
import { Router } from "../../../app/router";

export const RoutesProvider = () => {
  const router = new Router().create();

  return <RouterProvider router={router} />;
};
