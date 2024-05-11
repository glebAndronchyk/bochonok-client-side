import React from "react";
import ReactDOM from "react-dom/client";

import { MobxProvider } from "../shared/wrappers/MobxProvider";
import { Layout } from "./layout";

import "./index.css";
import { ModalWrapper } from "../shared/wrappers/ModalWrapper";
import { AddCategoryForm } from "../features/add-category";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MobxProvider>
      <ModalWrapper>
        <Layout>
          <AddCategoryForm />
        </Layout>
      </ModalWrapper>
    </MobxProvider>
  </React.StrictMode>,
);
