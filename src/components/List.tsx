import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import { StyledList } from "./styled/List.styled";
import Item from "./Item";

const List = ({ feedback, deleteHandler }) => {
  if (!feedback || feedback.length === 0) {
    return <span>No feedback yet</span>;
  }

  return (
    <StyledList>
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.75 }}
          >
            <Item
              id={item.id}
              rating={item.rating}
              text={item.text}
              key={item.id}
              deleteHandler={deleteHandler}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </StyledList>
  );
};

List.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default List;
