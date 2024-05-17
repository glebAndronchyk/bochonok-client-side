interface IInteractiveStarRating {
  onRatingChange: (val: number) => void;
  readonly?: false;
  allowFraction?: false;
}

interface IReadonlyStarRating {
  readonly: true;
  allowFraction: true;
}

interface ICommonStarRatingProps {
  rating: number;
}

interface IReadonlyProps extends IReadonlyStarRating, ICommonStarRatingProps {}
interface ICommonProps extends IInteractiveStarRating, ICommonStarRatingProps {}

export type StarRatingProps = IReadonlyProps | ICommonProps;
