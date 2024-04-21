import { IInteractiveCardBase } from "../../types/ui";

const Horizontal = ({ imgSrc, title, description }: IInteractiveCardBase) => {
  return (
    <div className="flex gap-2 hover:bg-green-400 transition-all p-2 rounded-md cursor-pointer">
      <img
        className="shrink-0"
        width={70}
        height={70}
        src={imgSrc}
        alt={`${title}-category`}
      />
      <div>
        <h3 className="font-bold mb-1.5">{title}</h3>
        <span className="text-sm">{description}</span>
      </div>
    </div>
  );
};

export const Card = {
  Horizontal,
};
