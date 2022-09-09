import {
  StyledRatingSet,
  RatingLi,
  RatingLabel,
  RatingInput,
} from "./styled/Form.styled";

const RatingSet = ({ select, selected }) => {
  const handleChange = (e) => {
    const value = +e.currentTarget.value; // + string => number
    select(value);
  };

  return (
    <StyledRatingSet>
      {Array.from({ length: 10 }, (_, i) => (
        <RatingLi key={`rating-${i + 1}`}>
          <RatingInput
            type="radio"
            id={`num${i + 1}`}
            name="rating"
            value={i + 1}
            onChange={handleChange}
            checked={selected === i + 1}
          />
          <RatingLabel htmlFor={`num${i + 1}`} checked={selected === i + 1}>
            {i + 1}
          </RatingLabel>
        </RatingLi>
      ))}
    </StyledRatingSet>
  );
};

export default RatingSet;
