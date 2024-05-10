import {
  Button as HButton,
  ButtonProps as HButtonProps,
} from "@headlessui/react";
import {useMemo} from "react";
import {classNames} from "../../lib/helpers/classNames";

interface ButtonProps extends HButtonProps {
  variants: (keyof typeof VariantsMap)[];
}

const VariantsMap = {
  rounded: "p-4 rounded-full",
  lg: "p-4 rounded-lg text-xl font-medium border-2",
  md: "p-2 rounded-md text-lg font-medium border-2",
  sm: "p-1 rounded-sm test-md border-2",
  light: "bg-white text-gray-900 hover:bg-green-500 hover:text-white",
  dark: "text-white hover:bg-white hover:text-gray-900"
}

export const Button = ({ children, variants, className, ...props }: ButtonProps) => {

  const aggregatedClassName = useMemo(() => {
    return variants
        .reduce((acc, curr) =>
            `${acc} ${VariantsMap[curr]}`, "")
        + " " + className;
  },[variants])

  return (
      <HButton className={classNames("transition-all border-green-500", aggregatedClassName)} {...props}>
        {children}
      </HButton>
  );
};
