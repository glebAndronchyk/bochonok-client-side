import { ButtonProps as HButtonProps } from "@headlessui/react/dist/components/button/button";
import { VariantsKeys } from "./settings";

export interface IButtonProps extends Omit<HButtonProps, "className"> {
  variants: VariantsKeys[];
  className?: string;
}
