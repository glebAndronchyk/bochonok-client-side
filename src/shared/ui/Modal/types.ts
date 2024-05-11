import { PropsWithChildren } from "react";

export interface IModalProps extends PropsWithChildren {
  onClose: () => void;
  title: string;
  shown: boolean;
}

export interface ISimplifiedModalProps
  extends Pick<IModalProps, "shown" | "onClose"> {}
