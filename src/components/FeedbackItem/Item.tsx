import { BlockNum, BlockText } from "./Item.styled";
import { Card } from "../styled/Common.styled";
import { CloseButton } from "components";
import { IFeedbackItem } from "interfaces";

interface IItemComponent extends IFeedbackItem {
  deleteHandler: (id: number) => void;
}

const Item = ({ rating, text, id, deleteHandler }: IItemComponent) => {
  const closeClickHandler = () => {
    deleteHandler(id);
  };

  return (
    <Card>
      <BlockNum>{rating}</BlockNum>
      <CloseButton handler={closeClickHandler} />
      <BlockText>{text}</BlockText>
    </Card>
  );
};

export default Item;
