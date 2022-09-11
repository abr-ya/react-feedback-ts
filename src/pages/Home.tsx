import { useState } from "react";
import { ToastContainer, toast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { List, Rating, FeedbackForm, Dialog } from "../components";
import { Card, Container } from "../components/styled/Common.styled";
import FeedbackData from "../data/FeedbackData";
import { AddHandlerType, IFeedbackItem } from "interfaces";
import logo from "../logo.jpg";

const Home = () => {
  const [feedback, setFeedback] = useState<IFeedbackItem[]>(FeedbackData);
  const [currentId, setCurrentId] = useState(0);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toastOptions: ToastOptions = {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  const closeHandler = () => {
    setIsDialogOpen(false);
  };

  const deleteDialog = (id: number) => {
    setIsDialogOpen(true);
    setCurrentId(id);
  };

  const deleteHandler = (id: number) => {
    setFeedback((prev) => prev.filter((item) => item.id !== id));
  };

  const yesHandler = () => {
    deleteHandler(currentId);
    setCurrentId(0);
  };

  const addHandler: AddHandlerType = (item) => {
    setFeedback((prev) => [item, ...prev]);
    toast("🦄 Спасибо за ваш отзыв!", toastOptions);
  };

  const dialogContentRender = () => <p>Are you sure you want to delete?</p>;

  return (
    <>
      <Container>
        <Card>
          <FeedbackForm addHandler={addHandler} />
        </Card>
        <Rating feedback={feedback} />
        <List feedback={feedback} deleteHandler={deleteDialog} />
      </Container>
      <Dialog open={isDialogOpen} img={logo} onClose={closeHandler} onYes={yesHandler}>
        {dialogContentRender()}
      </Dialog>
      <ToastContainer />
    </>
  );
};

export default Home;
