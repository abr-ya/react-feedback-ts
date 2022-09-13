import { useState } from "react";
import { ToastContainer, toast, ToastOptions } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { List, Rating, FeedbackForm } from "../components";
import { Card, Container } from "../components/styled/Common.styled";
import FeedbackData from "../data/FeedbackData";
import { AddHandlerType, IFeedbackItem } from "interfaces";

const Home = () => {
  const [feedback, setFeedback] = useState<IFeedbackItem[]>(FeedbackData);

  const toastOptions: ToastOptions = {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  };

  const addHandler: AddHandlerType = (item) => {
    setFeedback((prev) => [item, ...prev]);
    toast("🦄 Спасибо за ваш отзыв!", toastOptions);
  };

  return (
    <>
      <Container>
        <Card>
          <FeedbackForm addHandler={addHandler} />
        </Card>
        <Rating />
        <List />
      </Container>
      <ToastContainer />
    </>
  );
};

export default Home;
