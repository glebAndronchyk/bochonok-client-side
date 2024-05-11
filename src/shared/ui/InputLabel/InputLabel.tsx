import { classNames } from "../../lib/helpers/classNames";
import { Description, Label } from "@headlessui/react";
import { IInputFieldProps } from "../Input/types/IInputFieldProps";

interface IInputLabelProps
  extends Pick<IInputFieldProps, "label" | "description" | "errorMessage"> {}

export const InputLabel = ({
  label,
  description,
  errorMessage,
}: IInputLabelProps) => {
  return (
    <Label
      className={classNames(
        "flex flex-col gap-0.5 font-semibold",
        errorMessage && "text-red-700",
      )}
    >
      {label && label}
      <Description className="font-normal text-sm italic">
        {description && description}{" "}
        {errorMessage && <span> - {errorMessage}</span>}
      </Description>
    </Label>
  );
};
