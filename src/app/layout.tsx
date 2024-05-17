import { Header } from "../widgets/Header";
import React from "react";
import { Outlet } from "react-router";

export const Layout = () => {
  return (
    <>
      <Header />
      <main className="w-full h-full flex flex-col items-center">
        <div className="p-6 max-w-[70vw] w-full">
          <Outlet />
        </div>
      </main>
    </>
  );
};
