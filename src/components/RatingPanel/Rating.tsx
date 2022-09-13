import { StyledRating } from "./Rating.styled";
import { useContext } from "react";
import FeedbackContext from "context/FeedbackContext";

const Rating = () => {
  const { feedback } = useContext(FeedbackContext);
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
