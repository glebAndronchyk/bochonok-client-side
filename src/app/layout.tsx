import { Header } from "../widgets/Header";
import React, { PropsWithChildren } from "react";
import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
