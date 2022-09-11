import { StyledRatingSet, RatingLi, RatingLabel, RatingInput } from "./Form.styled";

interface IRatingSet {
  select: (value: number) => void;
  selected: number;
}

const RatingSet = ({ select, selected }: IRatingSet) => (
  <StyledRatingSet>
    {Array.from({ length: 10 }, (_, i) => (
      <RatingLi key={`rating-${i + 1}`}>
        <RatingInput
          type="radio"
          id={`num${i + 1}`}
          name="rating"
          value={i + 1}
          onChange={(e) => select(+e.currentTarget.value)}
          checked={selected === i + 1}
        />
        <RatingLabel htmlFor={`num${i + 1}`} checked={selected === i + 1}>
          {i + 1}
        </RatingLabel>
      </RatingLi>
    ))}
  </StyledRatingSet>
);

export default RatingSet;
