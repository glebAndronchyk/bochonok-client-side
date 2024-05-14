import { useRootState } from "../MobxProvider";
import { PropsWithChildren } from "react";
import { ObservedModal } from "./ObservedModal";
import { observer } from "mobx-react";

export const ModalWrapper = observer(({ children }: PropsWithChildren) => {
  const { modal } = useRootState();

  return (
    <>
      {children}
      <ObservedModal
        shown={modal.isOpen}
        modalKey={modal.currentModalKey}
        onClose={modal.closeModal}
        contentProps={modal.props}
      />
    </>
  );
});
