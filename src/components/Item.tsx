import { FaTimes } from "react-icons/fa";
import { BlockNum, BlockText, ButtonClose } from "./styled/Item.styled";
import { Card } from "./styled/Common.styled";

const Item = ({ rating, text, id, deleteHandler }) => {
  const closeClickHandler = () => {
    deleteHandler(id);
  };

  return (
    <Card>
      <BlockNum>{rating}</BlockNum>
      <ButtonClose onClick={closeClickHandler}>
        <FaTimes color="purple" />
      </ButtonClose>
      <BlockText>{text}</BlockText>
    </Card>
  );
};

export default Item;
