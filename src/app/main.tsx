import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { Header } from "../widgets/Header";

const Layout = () => {
  return <Header />;
};

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
);
