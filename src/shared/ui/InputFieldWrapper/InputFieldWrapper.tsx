import { Field } from "@headlessui/react";
import { InputLabel } from "../InputLabel/InputLabel";
import { IInputFieldProps } from "../Input/types/IInputFieldProps";

interface IInputFieldWrapperProps
  extends Pick<
    IInputFieldProps,
    "label" | "description" | "disabled" | "children" | "errorMessage"
  > {}

export const InputFieldWrapper = ({
  label,
  description,
  errorMessage = "",
  disabled,
  children,
}: IInputFieldWrapperProps) => {
  return (
    <Field
      disabled={disabled}
      className="flex flex-col gap-0.5 data-[disabled]:opacity-50"
    >
      {() => (
        <>
          <InputLabel
            label={label}
            description={description}
            errorMessage={errorMessage}
          />
          {children}
        </>
      )}
    </Field>
  );
};
