import { InputProps } from "@headlessui/react";
import { ReactNode } from "react";

export interface IInputFieldProps extends InputProps {
  label: ReactNode | string;
  description: ReactNode | string;
  errorMessage?: string;
}
