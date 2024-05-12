import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/20/solid";

interface IChevronProps {
  open: boolean;
}

export const Chevron = ({ open }: IChevronProps) => {
  const Component = open ? ChevronUpIcon : ChevronDownIcon;

  return <Component className="w-5 h-5" />;
};
