import React from "react";
import ReactDOM from "react-dom/client";

import { MobxProvider } from "../shared/wrappers/MobxProvider";

import { RoutesProvider } from "../shared/wrappers/RouterProvider/RoutesProvider";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MobxProvider>
      <RoutesProvider />
    </MobxProvider>
  </React.StrictMode>,
);
