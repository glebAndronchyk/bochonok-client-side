import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { ScaleTransition } from "../transitions";
import { IModalProps } from "./types";

export const Modal = ({ onClose, title, children, shown }: IModalProps) => {
  return (
    <ScaleTransition shown={shown}>
      <Dialog onClose={onClose} className="inset-0 fixed w-screen h-screen z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        <div className="inset-0 flex w-screen h-screen items-center justify-center p-4">
          <DialogPanel>
            <DialogTitle>{title}</DialogTitle>
            {children}
          </DialogPanel>
        </div>
      </Dialog>
    </ScaleTransition>
  );
};
