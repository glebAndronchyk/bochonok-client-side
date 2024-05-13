import { ListboxProps } from "@headlessui/react/dist";
import { IInputFieldProps } from "../../Input/types/IInputFieldProps";

export interface IListBoxProps extends Omit<ListboxProps, "onChange"> {
  selectedValue: IListBoxValue;
  values: IListBoxValue[];
  onChange: (value: IListBoxValue) => void;
}

export interface IListBoxValue {
  value: string;
  label: string;
}

export interface IControlledListBoxProps
  extends Pick<
      IInputFieldProps,
      "disabled" | "label" | "description" | "errorMessage"
    >,
    IListBoxProps {}
