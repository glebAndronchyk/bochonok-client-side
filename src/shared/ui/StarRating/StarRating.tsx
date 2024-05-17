import { Rating } from "react-simple-star-rating";
import { StarIcon } from "@heroicons/react/20/solid";
import { StarRatingProps } from "./types/StraRatingProps";

const EmptyStar = () => {
  return <StarIcon className="inline w-6 h-6" />;
};

const FillStar = () => {
  return <StarIcon className="inline w-6 h-6" />;
};

export const StarRating = ({
  rating,
  readonly,
  allowFraction,
  ...props
}: StarRatingProps) => {
  return (
    <Rating
      transition={true}
      readonly={readonly}
      allowFraction={allowFraction}
      initialValue={rating}
      onClick={"onRatingChange" in props ? props.onRatingChange : () => {}}
      iconsCount={5}
      fillIcon={<FillStar />}
      emptyIcon={<EmptyStar />}
    />
  );
};
