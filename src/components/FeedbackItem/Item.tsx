import { useContext, useState } from "react";
import { BlockNum, BlockText } from "./Item.styled";
import { Card } from "../styled/Common.styled";
import { CloseButton, EditButton, Dialog } from "components";
import { IFeedbackItem } from "interfaces";
import FeedbackContext from "context/FeedbackContext";
import logo from "logo.jpg";

const Item = ({ rating, text, id }: IFeedbackItem) => {
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const closeHandler = () => {
    setIsDialogOpen(false);
  };

  const closeClickHandler = () => {
    setIsDialogOpen(true);
  };

  const editClickHandler = () => {
    editFeedback(id);
  };

  const yesHandler = () => {
    deleteFeedback(id);
  };

  const dialogContentRender = () => <p>Are you sure you want to delete?</p>;

  return (
    <>
      <Card>
        <BlockNum>{rating}</BlockNum>
        <EditButton handler={editClickHandler} />
        <CloseButton handler={closeClickHandler} />
        <BlockText>{text}</BlockText>
      </Card>
      <Dialog open={isDialogOpen} img={logo} onClose={closeHandler} onYes={yesHandler}>
        {dialogContentRender()}
      </Dialog>
    </>
  );
};

export default Item;
