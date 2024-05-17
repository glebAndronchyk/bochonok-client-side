import { classNames } from "../../lib/helpers/classNames";
import { ImgHTMLAttributes } from "react";

interface IImageProps extends ImgHTMLAttributes<HTMLImageElement> {}

export const Image = ({ className, ...props }: IImageProps) => {
  return (
    <img
      {...props}
      className={classNames("absolute object-contain w-full h-full", className)}
    />
  );
};
