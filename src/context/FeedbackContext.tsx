import { IFeedbackItem } from "interfaces";
import { createContext, useState } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "This item is from context",
      rating: 10,
    },
    {
      id: 2,
      text: "This item is from context (2)",
      rating: 6,
    },
    {
      id: 3,
      text: "This item is from context (3)",
      rating: 8,
    },
  ]);

  const addFeedback = (newFeedback: IFeedbackItem) => {
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id: number) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        addFeedback,
        deleteFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
