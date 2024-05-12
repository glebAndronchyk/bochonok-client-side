import { Header } from "../widgets/Header";
import React, { PropsWithChildren } from "react";
import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="w-full h-full flex flex-col items-center">
        <div className="p-6 max-w-5xl w-full">
          <Outlet />
        </div>
      </main>
    </>
  );
};
