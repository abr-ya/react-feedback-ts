import { IFeedbackItem } from "interfaces";
import { createContext, FC, ReactNode, useState } from "react";

type FeedbackContextType = ReturnType<typeof FeedbackManager>;

const FeedbackContext = createContext<FeedbackContextType>({
  feedback: [],
  addFeedback: () => false,
  deleteFeedback: () => false,
});

interface IFeedbackManagerResult {
  feedback: IFeedbackItem[];
  addFeedback: (item: IFeedbackItem) => void;
  deleteFeedback: (id: number) => void;
}

// разделение на Manager и Provider по Jack No BS TS #25
const FeedbackManager = (initialFeedback: IFeedbackItem[]): IFeedbackManagerResult => {
  const [feedback, setFeedback] = useState(initialFeedback);

  const addFeedback = (newFeedback: IFeedbackItem) => {
    setFeedback([newFeedback, ...feedback]);
  };

  const deleteFeedback = (id: number) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  return { feedback, addFeedback, deleteFeedback };
};

const startValues: IFeedbackItem[] = [
  { id: 1, text: "This item is from context", rating: 10 },
  { id: 2, text: "This item is from context (2)", rating: 6 },
  { id: 3, text: "This item is from context (3)", rating: 8 },
];

export const FeedbackProvider: FC<{ children: ReactNode }> = ({ children }) => (
  <FeedbackContext.Provider value={FeedbackManager(startValues)}>{children}</FeedbackContext.Provider>
);

export default FeedbackContext;
// Jack вместо экспорт default готовит и экспортирует отдельно значения и обработчики
// - тогда не надо каждый раз "на местах" dspsdfnm useContext - сделать также?)
