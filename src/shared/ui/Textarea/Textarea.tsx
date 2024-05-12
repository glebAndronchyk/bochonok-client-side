import { Textarea as HTextarea, TextareaProps } from "@headlessui/react";
import { InputFieldWrapper } from "../InputFieldWrapper/InputFieldWrapper";
import { IInputFieldProps } from "../Input/types/IInputFieldProps";

interface ITextareaProps
  extends Pick<IInputFieldProps, "label" | "description" | "errorMessage">,
    TextareaProps {}

export const Textarea = ({
  label,
  description,
  errorMessage,
  disabled,
  ...textareaProps
}: ITextareaProps) => {
  return (
    <InputFieldWrapper
      disabled={disabled}
      label={label}
      description={description}
      errorMessage={errorMessage}
    >
      <HTextarea className="p-2 bg-white border-2 border-green-500 shadow-sm rounded-md" rows={6} {...textareaProps} />
    </InputFieldWrapper>
  );
};
