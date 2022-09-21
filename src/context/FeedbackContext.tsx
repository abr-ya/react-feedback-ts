import { IFeedbackItem, INewFeedbackItem } from "interfaces";
import { createContext, FC, ReactNode, useEffect, useState } from "react";
import { addFeedbackRequest, deleteFeedbackRequest, getAllFeedbacks } from "services/api";

type FeedbackContextType = ReturnType<typeof FeedbackManager>;

const FeedbackContext = createContext<FeedbackContextType>({
  feedback: [],
  addFeedback: () => false,
  deleteFeedback: () => false,
  editFeedback: () => false,
  updateFeedback: () => false,
  currentItem: null,
  isLoading: false,
});

interface IFeedbackManagerResult {
  feedback: IFeedbackItem[];
  addFeedback: (item: INewFeedbackItem) => void;
  deleteFeedback: (id: number) => void;
  editFeedback: (id: number) => void;
  updateFeedback: (item: IFeedbackItem) => void;
  currentItem: IFeedbackItem;
  isLoading: boolean;
}

// разделение на Manager и Provider по Jack No BS TS #25
const FeedbackManager = (initialFeedback: IFeedbackItem[]): IFeedbackManagerResult => {
  const [feedback, setFeedback] = useState(initialFeedback);
  const [currentItem, setCurrentItem] = useState<IFeedbackItem | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const getFeedbacks = async () => {
    const listFromServer: IFeedbackItem[] = await getAllFeedbacks();
    setFeedback(listFromServer);
    setTimeout(() => {
      console.log("Loading delay from Context!");
      setIsLoading(false);
    }, 1000);
  };

  useEffect(() => {
    getFeedbacks();
  }, []);

  const addFeedback = async (formFeedback: INewFeedbackItem) => {
    const { error, data } = await addFeedbackRequest(formFeedback);
    if (error) {
      console.log(`Произошла ошибка добавления, обработать: ${error}`);
    } else {
      console.log(`created with id ${data.id}`);
      setFeedback([data, ...feedback]);
    }
  };

  const deleteFeedback = async (id: number) => {
    const { error } = await deleteFeedbackRequest(id);
    if (error) {
      console.log(`Произошла ошибка удаления: ${error}`);
    } else {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  const editFeedback = (id: number) => {
    const item: IFeedbackItem = feedback.find((item) => item.id == id);
    setCurrentItem(item);
  };

  const updateFeedback = (fb: IFeedbackItem) => {
    setFeedback(feedback.map((item) => (item.id !== fb.id ? item : fb)));
    setCurrentItem(null);
  };

  return { feedback, addFeedback, deleteFeedback, editFeedback, currentItem, updateFeedback, isLoading };
};

// const startValues: IFeedbackItem[] = [
//   { id: 1, text: "This item is from context", rating: 10 },
//   { id: 2, text: "This item is from context (2)", rating: 6 },
//   { id: 3, text: "This item is from context (3)", rating: 8 },
// ];
const startValues = [];

export const FeedbackProvider: FC<{ children: ReactNode }> = ({ children }) => (
  <FeedbackContext.Provider value={FeedbackManager(startValues)}>{children}</FeedbackContext.Provider>
);

export default FeedbackContext;
// Jack вместо экспорт default готовит и экспортирует отдельно значения и обработчики
// - тогда не надо каждый раз "на местах" dspsdfnm useContext - сделать также?)
