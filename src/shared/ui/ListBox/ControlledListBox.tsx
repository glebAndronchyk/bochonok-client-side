import { InputFieldWrapper } from "../InputFieldWrapper/InputFieldWrapper";
import { ListBox } from "./ListBox";
import { IControlledListBoxProps } from "./types";

export const ControlledListBox = ({
  label,
  description,
  errorMessage,
  disabled,
  ...listBoxProps
}: IControlledListBoxProps) => {
  return (
    <InputFieldWrapper
      label={label}
      description={description}
      errorMessage={errorMessage}
      disabled={disabled}
    >
      <ListBox {...listBoxProps} disabled={disabled} />
    </InputFieldWrapper>
  );
};
