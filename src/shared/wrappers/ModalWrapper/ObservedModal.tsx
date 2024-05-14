import { ModalsDictionary } from "../../../entities/modals/ModalsDictionary";
import { ModalKeys } from "../../../entities/modals/types";
import { ISimplifiedModalProps } from "../../ui/Modal/types";

interface IObservedModalProps extends ISimplifiedModalProps {
  modalKey: ModalKeys | null;
  contentProps: unknown;
}

export const ObservedModal = ({
  modalKey,
  contentProps,
  ...modalProps
}: IObservedModalProps) => {
  const Component = modalKey ? ModalsDictionary[modalKey] : null;

  return Component && <Component {...modalProps} contentProps={contentProps} />;
};
