import { PropsWithChildren } from "react";
import { classNames } from "../../../../shared/lib/helpers/classNames";

interface ICardElement extends PropsWithChildren {
  className?: string;
}

export const CardElement = ({ children, className }: ICardElement) => {
  return (
    <div className={classNames("flex flex-col gap-2 mb-8", className)}>
      {children}
    </div>
  );
};
