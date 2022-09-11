import { useState } from "react";
import { Container } from "../components/styled/Common.styled";
import { List, Rating, Form } from "../components";
import FeedbackData from "../data/FeedbackData";
import { IFeedbackItem } from "interfaces";

const Home = () => {
  const [feedback, setFeedback] = useState(FeedbackData);
  const deleteHandler = (id: number) => {
    // eslint-disable-next-line no-alert
    if (window.confirm("Are you sure you want to delete?")) {
      setFeedback((prev) => prev.filter((item) => item.id !== id));
    }
  };
  const addHandler = (item: IFeedbackItem) => {
    setFeedback((prev) => [item, ...prev]);
    // eslint-disable-next-line no-alert
    alert("Спасибо за ваш отзыв!");
  };

  return (
    <Container>
      <Form addHandler={addHandler} />
      <Rating feedback={feedback} />
      <List feedback={feedback} deleteHandler={deleteHandler} />
    </Container>
  );
};

export default Home;
