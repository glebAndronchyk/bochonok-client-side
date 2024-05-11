import { Description, Field, Input, Label } from "@headlessui/react";
import { classNames } from "../../lib/helpers/classNames";
import { IInputFieldProps } from "./types/IInputFieldProps";
import { InputLabel } from "../InputLabel/InputLabel";

export const InputField = ({
  label,
  description,
  errorMessage = "",
  disabled,
  ...props
}: IInputFieldProps) => {
  return (
    <Field
      disabled={disabled}
      className="flex flex-col gap-0.5 data-[disabled]:opacity-50"
    >
      <InputLabel
        label={label}
        description={description}
        errorMessage={errorMessage}
      />
      <Input
        {...props}
        className={classNames(
          "py-2 px-4 rounded-md shadow-md border-2 border-green-500 bg-white outline-none",
          errorMessage && "text-red-900 border-red-700",
        )}
      />
    </Field>
  );
};
