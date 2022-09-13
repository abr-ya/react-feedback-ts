import { IFeedbackItem } from "interfaces";
import { StyledRating } from "./Rating.styled";

interface IRating {
  feedback: IFeedbackItem[];
}

const Rating = ({ feedback }: IRating) => {
  const count = feedback.length;
  const averageRating = count ? (feedback.reduce((acc, it) => acc + it.rating, 0) / count).toFixed(1) : 0;

  return (
    <StyledRating>
      <h4>{`${count} rewies`}</h4>
      <h4>{`Average Rating: ${averageRating}`}</h4>
    </StyledRating>
  );
};

export default Rating;
