import { StarRating } from "../../../../shared/ui/StarRating/StarRating";

interface IAlreadyRatedProps {
  rating: number;
  totalRated: number;
}

export const AlreadyRated = ({ rating, totalRated }: IAlreadyRatedProps) => {
  return (
    <div className="flex gap-2 items-center italic">
      <StarRating readonly rating={rating} /> - {rating} - Total rated:{" "}
      {totalRated}
    </div>
  );
};
