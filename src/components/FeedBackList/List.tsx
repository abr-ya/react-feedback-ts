import { useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { StyledList } from "./List.styled";
import Item from "../FeedbackItem/Item";
import { IFeedbackItem } from "interfaces";
import FeedbackContext from "context/FeedbackContext";

const List = () => {
  const { feedback } = useContext(FeedbackContext);

  if (!feedback || feedback.length === 0) {
    return <span>No feedback yet</span>;
  }

  return (
    <StyledList>
      <AnimatePresence>
        {feedback.map((item: IFeedbackItem) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.75 }}
          >
            <Item id={item.id} rating={item.rating} text={item.text} key={item.id} />
          </motion.div>
        ))}
      </AnimatePresence>
    </StyledList>
  );
};

export default List;
