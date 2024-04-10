import { RefObject, useCallback, useEffect } from "react";
import { TParameterlessVoidFunction } from "../../../types/misc";

interface IUseOutsideClickOptions<T extends HTMLElement> {
  saveToClickElementIds?: string[];
}

export const useOutsideClick = <T extends HTMLElement>(
  targetRef: RefObject<T>,
  callback: TParameterlessVoidFunction,
  listenOn: boolean[],
  options?: IUseOutsideClickOptions<T>,
) => {
  const handleOutsideClick = useCallback((e: MouseEvent) => {
    const targetElement = targetRef.current;
    const pressedElement = e.target;

    const elementsExists = targetElement && pressedElement;
    const isPressedTarget = pressedElement === targetElement;
    const isPressedSaveToClick = options?.saveToClickElementIds?.some((id) => {
      const saveToClickElement = document.getElementById(id);

      return saveToClickElement === pressedElement;
    });

    if (elementsExists) {
      if (isPressedTarget || isPressedSaveToClick) {
        e.preventDefault();
      } else {
        callback();
        window.removeEventListener("click", handleOutsideClick);
      }
    }
  }, []);

  useEffect(() => {
    if (listenOn.every((val) => val)) {
      window.addEventListener("click", handleOutsideClick);
    }
  }, [options, targetRef, callback]);
};
