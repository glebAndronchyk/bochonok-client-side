import React from "react";
import ReactDOM from "react-dom/client";

import { MobxProvider } from "../shared/wrappers/MobxProvider";
import { Layout } from "./layout";

import "./index.css";
import { ModalWrapper } from "../shared/wrappers/ModalWrapper";
import { InitFetchersWrapper } from "../shared/wrappers/InitFetchersWrapper/InitFetchersWrapper";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MobxProvider>
      <InitFetchersWrapper>
        <ModalWrapper>
          <Layout>123</Layout>
        </ModalWrapper>
      </InitFetchersWrapper>
    </MobxProvider>
  </React.StrictMode>,
);
