import { IInteractiveCardBase } from "../../types/ui";
import { useMemo } from "react";

const Horizontal = ({
  img,
  title,
  description,
  as,
  onClick,
}: IInteractiveCardBase) => {
  const WrapperComponent = as || "div";

  const ImageComponent = useMemo(
    () =>
      typeof img === "string" ? (
        <img
          className="shrink-0 object-contain w-24 h-24"
          width={70}
          height={70}
          src={img}
          alt={`${title}-category`}
        />
      ) : (
        img
      ),
    [img],
  );
  return (
    <WrapperComponent
      onClick={onClick}
      className="flex gap-4 hover:bg-green-400 items-center transition-all p-2 rounded-md cursor-pointer"
    >
      {ImageComponent}
      <div>
        <h3 className="font-bold mb-1.5">{title}</h3>
        <span className="text-sm">{description}</span>
      </div>
    </WrapperComponent>
  );
};

export const Card = {
  Horizontal,
};
