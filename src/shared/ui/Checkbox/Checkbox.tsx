import { Checkbox, CheckboxProps, Field, Label } from "@headlessui/react";
import { IInputFieldProps } from "../Input/types/IInputFieldProps";
import { classNames } from "../../lib/helpers/classNames";
import { CheckIcon } from "@heroicons/react/20/solid";

interface ICheckboxFieldProps
  extends Pick<IInputFieldProps, "label" | "errorMessage">,
    CheckboxProps {
  wrapperClassName?: string;
  labelClassName?: string;
}

export const CheckboxField = ({
  label,
  errorMessage = "",
  disabled,
  wrapperClassName = "",
  labelClassName = "",
  ...props
}: ICheckboxFieldProps) => {
  return (
    <Field
      disabled={disabled}
      className={classNames("cursor-pointer flex gap-1.5 items-center", wrapperClassName)}
    >
      <Checkbox
        {...props}
        className="group p-2 rounded-md data-[checked]:bg-green-500 data-[checked]:text-white bg-white text-green-500"
      >
        <CheckIcon className="group-data-[checked]:opacity-100 opacity-0 w-6 h-6" />
      </Checkbox>
      <Label className={classNames("text-sm  italic", labelClassName)}>
        {label}
      </Label>
    </Field>
  );
};
