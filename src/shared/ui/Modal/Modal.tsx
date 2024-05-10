import {
  Dialog,
  DialogPanel,
  DialogProps,
  DialogTitle,
  Transition,
} from "@headlessui/react";
import { ScaleTransition } from "../transitions/ScaleTransition";
import { PropsWithChildren } from "react";

interface ModalProps extends PropsWithChildren {
  onClose: () => void;
  title: string;
  shown: boolean;
}

export const Modal = ({ onClose, title, children, shown }: ModalProps) => {
  return (
    <ScaleTransition shown={shown}>
      <Dialog onClose={onClose} className="fixed flex w-screen h-screen z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel>
            <DialogTitle>{title}</DialogTitle>
            {children}
          </DialogPanel>
        </div>
      </Dialog>
    </ScaleTransition>
  );
};
