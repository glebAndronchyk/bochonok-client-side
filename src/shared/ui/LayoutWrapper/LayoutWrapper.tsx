import { PropsWithChildren } from "react";

export const LayoutWrapper = ({ children }: PropsWithChildren) => {
  return <div className="bg-white rounded-lg shadow-md p-4">{children}</div>;
};
