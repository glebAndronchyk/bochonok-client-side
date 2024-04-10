import {useEffect, useState} from "react";

export const useToggle = (defaultValue: boolean = false) => {
  const [isOpen, setIsOpen] = useState(defaultValue);

  const toggle = () => {
    setIsOpen((prev) => !prev);
  }

  const open = () => {
    setIsOpen(true);
  }

  const close = () => {
    setIsOpen(false);
  }

  return {
    open, close, isOpen, toggle,
  }
}
