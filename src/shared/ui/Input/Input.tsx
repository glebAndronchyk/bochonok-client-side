import {
  Description,
  Field,
  Input,
  InputProps,
  Label,
} from "@headlessui/react";
import { ReactNode } from "react";
import { classNames } from "../../lib/helpers/classNames";

interface InputFieldProps extends InputProps {
  label: ReactNode | string;
  description: ReactNode | string;
  errorMessage: string;
}

export const InputField = ({
  label,
  description,
  errorMessage,
  disabled,
  ...props
}: InputFieldProps) => {
  return (
    <Field
      disabled={disabled}
      className="flex flex-col gap-0.5 data-[disabled]:opacity-50"
    >
      <Label
        className={classNames(
          "flex flex-col gap-0.5",
          errorMessage && "text-red-700",
        )}
      >
        {label && label}
        <Description>
          {description && description}{" "}
          {errorMessage && <span> - {errorMessage}</span>}
        </Description>
      </Label>
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
