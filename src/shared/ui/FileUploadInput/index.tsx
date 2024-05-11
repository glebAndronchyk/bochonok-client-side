import { Input, InputProps } from "@headlessui/react";
import { Button } from "../Button/Button";
import { useRef } from "react";
import { InputFieldWrapper } from "../InputFieldWrapper/InputFieldWrapper";
import { IInputFieldProps } from "../Input/types/IInputFieldProps";

interface IFileUploadInputProps extends Omit<IInputFieldProps, "className"> {}

export const FileUploadInput = ({ label, ...props }: IFileUploadInputProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFilePick = () => {
    inputRef!.current!.click();
  };

  return (
    <InputFieldWrapper
      label={label}
      disabled={props.disabled}
      description={props.description}
    >
      <Input ref={inputRef} type="file" {...props} className="hidden" />
      <Button
        onClick={handleFilePick}
        variants={["light", "md"]}
        disabled={props.disabled}
      >
        {label}
      </Button>
    </InputFieldWrapper>
  );
};
