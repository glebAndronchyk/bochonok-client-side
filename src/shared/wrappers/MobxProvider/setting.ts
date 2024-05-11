import { createContext, useContext } from "react";
import { RootStore } from "../../store/RootStore";

export const MobxContext = createContext<RootStore | null>(null);

export const useRootState = () => {
  const ctx = useContext(MobxContext);

  if (!ctx) {
    throw new Error("No root store provided.");
  }

  return ctx;
};
