import { Transition } from "@headlessui/react";
import { ITransition } from "./types/ITransition";
import { Fragment } from "react";

export const ScaleTransition = ({ children, shown }: ITransition) => {
  return (
    <Transition
      as={Fragment}
      show={shown}
      enter="duration-150 ease"
      enterFrom="scale-0"
      entered="scale-100"
      leaveFrom="scale-100"
      leaveTo="scale-0 delay-[1ms]"
      leave="duration-150 ease"
    >
      {children}
    </Transition>
  );
};
