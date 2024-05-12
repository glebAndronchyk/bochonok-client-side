import { Transition } from "@headlessui/react";
import { ITransition } from "./types/ITransition";
import { Fragment } from "react";

export const OpacityTransition = ({ children, shown }: ITransition) => {
  return (
    <Transition
      as={Fragment}
      show={shown}
      enter="duration-150 ease"
      enterFrom="opacity-0"
      entered="opacity-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0 delay-[1ms]"
      leave="duration-150 ease"
    >
      {children}
    </Transition>
  );
};
