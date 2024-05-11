import React from "react";
import ReactDOM from "react-dom/client";

import { MobxProvider } from "../shared/wrappers/MobxProvider";
import { Layout } from "./layout";

import "./index.css";
import { ModalWrapper } from "../shared/wrappers/ModalWrapper";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MobxProvider>
      <ModalWrapper>
        <Layout>123</Layout>
      </ModalWrapper>
    </MobxProvider>
  </React.StrictMode>,
);
