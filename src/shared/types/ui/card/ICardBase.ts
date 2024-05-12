import { ElementType, ReactNode } from "react";

export interface ICardBase {
  img: ReactNode | string;
  title: string;
  description: string;
  as?: ElementType;
}
