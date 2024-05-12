import React from "react";
import ReactDOM from "react-dom/client";

import { MobxProvider } from "../shared/wrappers/MobxProvider";
import { Layout } from "./layout";

import { ModalWrapper } from "../shared/wrappers/ModalWrapper";
import { InitFetchersWrapper } from "../shared/wrappers/InitFetchersWrapper/InitFetchersWrapper";
import { RoutesProvider } from "../shared/wrappers/RouterProvider/RoutesProvider";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MobxProvider>
      <InitFetchersWrapper>
        <ModalWrapper>
          <RoutesProvider />
        </ModalWrapper>
      </InitFetchersWrapper>
    </MobxProvider>
  </React.StrictMode>,
);
