import { Input } from "@headlessui/react";
import { classNames } from "../../lib/helpers/classNames";
import { IInputFieldProps } from "./types/IInputFieldProps";
import { InputFieldWrapper } from "../InputFieldWrapper/InputFieldWrapper";

export const InputField = ({
  label,
  description,
  errorMessage = "",
  disabled,
  ...props
}: IInputFieldProps) => {
  return (
    <InputFieldWrapper
      label={label}
      description={description}
      errorMessage={errorMessage}
      disabled={disabled}
    >
      <Input
        {...props}
        className={classNames(
          "py-2 px-4 rounded-md shadow-md border-2 border-green-500 bg-white outline-none",
          errorMessage && "text-red-900 border-red-700",
        )}
      />
    </InputFieldWrapper>
  );
};
