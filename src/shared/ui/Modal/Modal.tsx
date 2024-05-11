import { Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { ScaleTransition } from "../transitions";
import { IModalProps } from "./types";

export const Modal = ({ onClose, title, children, shown }: IModalProps) => {
  return (
    <ScaleTransition shown={shown}>
      <Dialog
        onClose={onClose}
        className="inset-0 fixed w-screen h-screen z-50"
      >
        <div className="fixed inset-0 bg-black/30 z-10" aria-hidden="true" />

        <div className="flex w-screen h-screen items-center justify-center p-4 z-20">
          <DialogPanel className="max-w-lg w-full p-5 bg-white rounded-lg z-20">
            <DialogTitle className="text-lg font-medium">{title}</DialogTitle>
            {children}
          </DialogPanel>
        </div>
      </Dialog>
    </ScaleTransition>
  );
};
