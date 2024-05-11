import { Input, InputProps } from "@headlessui/react";
import { Button } from "../Button/Button";
import { useRef } from "react";

interface IFileUploadInputProps extends Omit<InputProps, "className"> {
  label: string;
}

export const FileUploadInput = ({ label, ...props }: IFileUploadInputProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFilePick = () => {
    inputRef!.current!.click();
  };

  return (
    <>
      <Input ref={inputRef} type="file" {...props} className="hidden" />
      <Button
        onClick={handleFilePick}
        variants={["light", "md"]}
        disabled={props.disabled}
      >
        {label}
      </Button>
    </>
  );
};
