import { MobxContext } from "./settings";
import { PropsWithChildren } from "react";
import { RootStore } from "../../store/RootStore";

export const MobxProvider = ({ children }: PropsWithChildren) => {
  return (
    <MobxContext.Provider value={new RootStore()}>
      {children}
    </MobxContext.Provider>
  );
};
