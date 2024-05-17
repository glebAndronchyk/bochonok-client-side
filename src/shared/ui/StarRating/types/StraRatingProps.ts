interface IInteractiveStarRating {
  onRatingChange: (val: number) => void;
  readonly?: false;
}

interface IReadonlyStarRating {
  readonly: true;
}

interface ICommonStarRatingProps {
  rating: number;
}

interface IReadonlyProps extends IReadonlyStarRating, ICommonStarRatingProps {}
interface ICommonProps extends IInteractiveStarRating, ICommonStarRatingProps {}

export type StarRatingProps = IReadonlyProps | ICommonProps;
