import { Button as HButton } from "@headlessui/react";
import { useMemo } from "react";
import { classNames } from "../../lib/helpers/classNames";
import { IButtonProps } from "./types";
import { VariantsMap } from "./settings";

export const Button = ({
  children,
  variants,
  className,
  ...props
}: IButtonProps) => {
  const aggregatedClassName = useMemo(() => {
    return variants.reduce((acc, curr) => `${acc} ${VariantsMap[curr]}`, "");
  }, [variants]);

  return (
    <HButton
      className={classNames(
        "transition-all border-green-500",
        className,
        aggregatedClassName,
      )}
      {...props}
    >
      {children}
    </HButton>
  );
};
