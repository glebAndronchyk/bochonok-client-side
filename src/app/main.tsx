import React from "react";
import ReactDOM from "react-dom/client";

import { MobxProvider } from "../shared/wrappers/MobxProvider";
import { Layout } from "./layout";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MobxProvider>
      <Layout>123</Layout>
    </MobxProvider>
  </React.StrictMode>,
);
